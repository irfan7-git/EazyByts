// Sample product data with various clothing items and brands
const products = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        brand: "Nike",
        category: "men",
        price: 1299,
        originalPrice: 1599,
        discount: 19,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1503341338985-95b4d6d5d8b6?w=400&h=400&fit=crop"
        ],
        colors: ["#000000", "#ffffff", "#ff0000", "#0000ff"],
        sizes: ["S", "M", "L", "XL", "2XL"],
        description: "Comfortable cotton t-shirt perfect for everyday wear. Made with 100% premium cotton."
    },
    {
        id: 2,
        name: "Elegant Summer Dress",
        brand: "Zara",
        category: "women",
        price: 2499,
        originalPrice: 3299,
        discount: 24,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop"
        ],
        colors: ["#ff69b4", "#ffffff", "#ffff00", "#00ff00"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Beautiful floral summer dress perfect for any occasion. Lightweight and breathable fabric."
    },
    {
        id: 3,
        name: "Denim Jacket",
        brand: "Levi's",
        category: "men",
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1594088484728-61c3e81c1d86?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1580887080862-2e53d6b6e62a?w=400&h=400&fit=crop"
        ],
        colors: ["#1e3a8a", "#374151", "#000000"],
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        description: "Classic denim jacket with a modern fit. Perfect for layering and casual outings."
    },
    {
        id: 4,
        name: "Kids Rainbow Hoodie",
        brand: "H&M",
        category: "kids",
        price: 1899,
        originalPrice: 2299,
        discount: 17,
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1622290619238-e208c96e1023?w=400&h=400&fit=crop"
        ],
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
        description: "Colorful and comfortable hoodie for kids. Perfect for play and everyday activities."
    },
    {
        id: 5,
        name: "Designer Handbag",
        brand: "Coach",
        category: "accessories",
        price: 8999,
        originalPrice: 12999,
        discount: 31,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
        ],
        colors: ["#8b4513", "#000000", "#ff69b4"],
        sizes: ["One Size"],
        description: "Luxury designer handbag made with premium leather. Perfect for any formal occasion."
    },
    {
        id: 6,
        name: "Sports Tracksuit",
        brand: "Adidas",
        category: "men",
        price: 4599,
        originalPrice: 5999,
        discount: 23,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
        ],
        colors: ["#000000", "#0000ff", "#ff0000"],
        sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
        description: "Complete tracksuit set for sports and fitness activities. Breathable and comfortable."
    },
    {
        id: 7,
        name: "Casual Blouse",
        brand: "Mango",
        category: "women",
        price: 1799,
        originalPrice: 2199,
        discount: 18,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=400&fit=crop"
        ],
        colors: ["#ffffff", "#ff69b4", "#ffff00"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Stylish casual blouse perfect for work and everyday wear. Comfortable and elegant."
    },
    {
        id: 8,
        name: "Winter Scarf",
        brand: "Uniqlo",
        category: "accessories",
        price: 999,
        originalPrice: 1299,
        discount: 23,
        image: "https://images.unsplash.com/photo-1517654405012-1e3b6e2c5ae0?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517654405012-1e3b6e2c5ae0?w=400&h=400&fit=crop",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop"
        ],
        colors: ["#8b4513", "#000000", "#ff0000", "#0000ff"],
        sizes: ["One Size"],
        description: "Warm and cozy winter scarf made with soft wool. Perfect for cold weather."
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Payment method selection
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            showPaymentDetails(this.value);
        });
    });
}

// Load and display products
function loadProducts(filter = 'all') {
    const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);
    
    // Use the advanced product loading function
    if (window.loadProductsWithData) {
        window.loadProductsWithData(filteredProducts);
    } else {
        // Fallback to basic loading if advanced features not loaded
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = '<div class="empty-products"><i class="fas fa-shopping-bag"></i><h3>No products found</h3><p>Try selecting a different category</p></div>';
            return;
        }

        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card fade-in" onclick="viewProduct(${product.id})">
                <div class="product-image" style="background-image: url('${product.image}')">
                    <div class="product-badge">${product.discount}% OFF</div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-brand">${product.brand}</p>
                    <div class="product-price">
                        <span class="current-price">₹${product.price}</span>
                        <span class="original-price">₹${product.originalPrice}</span>
                        <span class="discount">${product.discount}% OFF</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Filter products by category
function filterCategory(category) {
    currentFilter = category;
    loadProducts(category);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = [...document.querySelectorAll('.filter-btn')].find(btn => 
        btn.textContent.toLowerCase().includes(category) || 
        (category === 'all' && btn.textContent === 'All')
    );
    
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// View product details
function viewProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product.html';
}

// Scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cart functionality
function addToCart(productId, selectedColor = null, selectedSize = null, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if product with same color and size already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.selectedColor === selectedColor && 
        item.selectedSize === selectedSize
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            ...product,
            selectedColor,
            selectedSize,
            quantity,
            cartId: Date.now() + Math.random()
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showSuccessMessage('Product added to cart!');
}

// Remove from cart
function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
    updateCartTotal();
}

// Update cart item quantity
function updateCartQuantity(cartId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(cartId);
        return;
    }

    const item = cart.find(item => item.cartId === cartId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCartItems();
        updateCartTotal();
    }
}

// Update cart count in navigation
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Open cart modal
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'block';
        displayCartItems();
        updateCartTotal();
    }
}

// Close cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-meta">
                    Brand: ${item.brand}
                    ${item.selectedColor ? `<br>Color: <span style="display: inline-block; width: 15px; height: 15px; background-color: ${item.selectedColor}; border-radius: 50%; vertical-align: middle;"></span>` : ''}
                    ${item.selectedSize ? `<br>Size: ${item.selectedSize}` : ''}
                </div>
                <div class="cart-item-price">₹${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateCartQuantity('${item.cartId}', ${item.quantity - 1})">-</button>
                <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity('${item.cartId}', parseInt(this.value))">
                <button onclick="updateCartQuantity('${item.cartId}', ${item.quantity + 1})">+</button>
            </div>
            <i class="fas fa-times remove-item" onclick="removeFromCart('${item.cartId}')"></i>
        </div>
    `).join('');
}

// Update cart total
function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cartTotalElement) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalElement.textContent = total;
        
        if (checkoutBtn) {
            checkoutBtn.disabled = cart.length === 0;
        }
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showErrorMessage('Your cart is empty!');
        return;
    }
    
    closeCart();
    window.location.href = 'checkout.html';
}

// Show payment details based on selected method
function showPaymentDetails(paymentMethod) {
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

// Show success message
function showSuccessMessage(message) {
    // Create and show a temporary success message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Show error message
function showErrorMessage(message) {
    // Create and show a temporary error message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'error-message';
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    if (event.target === cartModal) {
        closeCart();
    }
}

// Export functions for use in other files
window.filterCategory = filterCategory;
window.viewProduct = viewProduct;
window.scrollToProducts = scrollToProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.openCart = openCart;
window.closeCart = closeCart;
window.proceedToCheckout = proceedToCheckout;
window.showPaymentDetails = showPaymentDetails;
window.products = products;