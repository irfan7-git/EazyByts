// Checkout page functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentStep = 1;
let orderData = {
    address: {},
    paymentMethod: null,
    paymentDetails: {}
};

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    loadCheckoutItems();
    updateOrderSummary();
    setupCheckoutEventListeners();
});

// Setup event listeners for checkout page
function setupCheckoutEventListeners() {
    // Address form validation
    const addressForm = document.getElementById('address-form');
    if (addressForm) {
        const inputs = addressForm.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }

    // Payment method selection
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            handlePaymentMethodChange(this.value);
        });
    });

    // Card number formatting
    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', formatCardNumber);
    }

    // Expiry date formatting
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', formatExpiryDate);
    }

    // CVV validation
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', formatCVV);
    }
}

// Load checkout items from cart
function loadCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    if (!checkoutItemsContainer) return;

    checkoutItemsContainer.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="checkout-item-info">
                <h5>${item.name}</h5>
                <div class="checkout-item-meta">
                    ${item.brand} | Qty: ${item.quantity}
                    ${item.selectedColor ? `<br>Color: <span style="display: inline-block; width: 12px; height: 12px; background-color: ${item.selectedColor}; border-radius: 50%; vertical-align: middle;"></span>` : ''}
                    ${item.selectedSize ? ` | Size: ${item.selectedSize}` : ''}
                </div>
            </div>
            <div class="item-total">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
}

// Update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const shipping = subtotal > 1000 ? 0 : 99; // Free shipping over ₹1000
    const total = subtotal + tax + shipping;

    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('tax').textContent = `₹${tax}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('total-amount').textContent = `₹${total}`;
}

// Validate form fields
function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    removeFieldError(field);

    // Validation based on field type
    switch(field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'tel':
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid 10-digit phone number';
            }
            break;
        default:
            if (field.hasAttribute('required') && value === '') {
                isValid = false;
                errorMessage = 'This field is required';
            }
            break;
    }

    // Special validation for PIN code
    if (field.name === 'pincode') {
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid 6-digit PIN code';
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '0.25rem';
    
    // Insert after the field
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

// Remove field error
function removeFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

// Clear field error on input
function clearFieldError(event) {
    const field = event.target;
    field.classList.remove('error');
    removeFieldError(field);
}

// Proceed to payment step
function proceedToPayment() {
    const addressForm = document.getElementById('address-form');
    const requiredFields = addressForm.querySelectorAll('input[required]');
    let isFormValid = true;

    // Validate all required fields
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        showErrorMessage('Please fill in all required fields correctly');
        return;
    }

    // Save address data
    const formData = new FormData(addressForm);
    orderData.address = Object.fromEntries(formData);

    // Move to payment step
    currentStep = 2;
    updateStepIndicator();
    showSection('payment-section');
    hideSection('address-section');
}

// Go back to address step
function backToAddress() {
    currentStep = 1;
    updateStepIndicator();
    showSection('address-section');
    hideSection('payment-section');
}

// Handle payment method change
function handlePaymentMethodChange(paymentMethod) {
    orderData.paymentMethod = paymentMethod;
    
    // Hide all payment details
    document.querySelectorAll('.payment-details').forEach(detail => {
        detail.classList.add('hidden');
    });

    // Show specific payment details
    if (paymentMethod === 'upi') {
        document.getElementById('upi-details').classList.remove('hidden');
    } else if (paymentMethod === 'card') {
        document.getElementById('card-details').classList.remove('hidden');
    }
}

// Format card number input
function formatCardNumber(event) {
    let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    
    if (formattedValue.length > 19) {
        formattedValue = formattedValue.substr(0, 19);
    }
    
    event.target.value = formattedValue;
}

// Format expiry date input
function formatExpiryDate(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    event.target.value = value;
}

// Format CVV input
function formatCVV(event) {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 3) {
        value = value.substring(0, 3);
    }
    event.target.value = value;
}

// Place order
function placeOrder() {
    if (!orderData.paymentMethod) {
        showErrorMessage('Please select a payment method');
        return;
    }

    // Validate payment details if required
    if (orderData.paymentMethod === 'upi') {
        const upiId = document.getElementById('upi-id').value.trim();
        if (!upiId) {
            showErrorMessage('Please enter your UPI ID');
            return;
        }
        orderData.paymentDetails.upiId = upiId;
    } else if (orderData.paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiry = document.getElementById('expiry').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        const cardName = document.getElementById('card-name').value.trim();

        if (!cardNumber || !expiry || !cvv || !cardName) {
            showErrorMessage('Please fill in all card details');
            return;
        }

        orderData.paymentDetails = { cardNumber, expiry, cvv, cardName };
    }

    // Generate order ID
    const orderId = 'ORD' + Date.now() + Math.floor(Math.random() * 1000);
    
    // Save order to localStorage (in real app, this would be sent to server)
    const order = {
        orderId,
        items: cart,
        address: orderData.address,
        paymentMethod: orderData.paymentMethod,
        total: calculateTotal(),
        timestamp: new Date().toISOString(),
        status: 'confirmed'
    };
    
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cart');
    cart = [];

    // Move to confirmation step
    currentStep = 3;
    updateStepIndicator();
    showSection('confirmation-section');
    hideSection('payment-section');
    
    // Display order ID
    document.getElementById('order-id').textContent = orderId;
    
    // Show success message
    showSuccessMessage('Order placed successfully!');
}

// Calculate total amount
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const shipping = subtotal > 1000 ? 0 : 99;
    return subtotal + tax + shipping;
}

// Update step indicator
function updateStepIndicator() {
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.toggle('active', index + 1 === currentStep);
    });
}

// Show section
function showSection(sectionId) {
    document.getElementById(sectionId).classList.remove('hidden');
}

// Hide section
function hideSection(sectionId) {
    document.getElementById(sectionId).classList.add('hidden');
}

// Show success message
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '100px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.zIndex = '9999';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Show error message
function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'error-message';
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '100px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.zIndex = '9999';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Export functions
window.proceedToPayment = proceedToPayment;
window.backToAddress = backToAddress;
window.placeOrder = placeOrder;