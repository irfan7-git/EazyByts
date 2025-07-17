// Product detail page functionality
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let currentQuantity = 1;

// Initialize product detail page
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    setupProductEventListeners();
});

// Load product details from localStorage
function loadProductDetails() {
    const productId = parseInt(localStorage.getItem('selectedProduct'));
    if (!productId || !window.products) {
        window.location.href = 'index.html';
        return;
    }

    currentProduct = window.products.find(p => p.id === productId);
    if (!currentProduct) {
        window.location.href = 'index.html';
        return;
    }

    displayProductDetails();
    loadRelatedProducts();
}

// Display product details
function displayProductDetails() {
    // Update breadcrumb
    document.getElementById('breadcrumb-category').textContent = currentProduct.category;
    document.getElementById('breadcrumb-product').textContent = currentProduct.name;

    // Main product image
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = currentProduct.images[0];
    mainImage.alt = currentProduct.name;

    // Thumbnail images
    const thumbnailContainer = document.getElementById('thumbnail-images');
    thumbnailContainer.innerHTML = currentProduct.images.map((image, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${image}', ${index})">
            <img src="${image}" alt="${currentProduct.name}">
        </div>
    `).join('');

    // Product info
    document.getElementById('product-title').textContent = currentProduct.name;
    document.getElementById('product-brand').textContent = currentProduct.brand;
    document.getElementById('product-price').textContent = `₹${currentProduct.price}`;
    document.getElementById('original-price').textContent = `₹${currentProduct.originalPrice}`;
    document.getElementById('discount-percentage').textContent = `${currentProduct.discount}% OFF`;
    document.getElementById('product-description').textContent = currentProduct.description;

    // Color options
    const colorContainer = document.getElementById('color-options');
    colorContainer.innerHTML = currentProduct.colors.map(color => `
        <div class="color-option" style="background-color: ${color}" onclick="selectColor('${color}')" title="Color: ${color}"></div>
    `).join('');

    // Size options
    const sizeContainer = document.getElementById('size-options');
    sizeContainer.innerHTML = currentProduct.sizes.map(size => `
        <div class="size-option" onclick="selectSize('${size}')">${size}</div>
    `).join('');

    // Set default selections
    if (currentProduct.colors.length > 0) {
        selectColor(currentProduct.colors[0]);
    }
    if (currentProduct.sizes.length > 0) {
        selectSize(currentProduct.sizes[0]);
    }
}

// Setup event listeners for product page
function setupProductEventListeners() {
    // Quantity controls
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            updateQuantity(parseInt(this.value) || 1);
        });
    }
}

// Change main product image
function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = imageSrc;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Select color
function selectColor(color) {
    selectedColor = color;
    
    // Update selected color visual
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = [...document.querySelectorAll('.color-option')].find(option => 
        option.style.backgroundColor === color
    );
    
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}

// Select size
function selectSize(size) {
    selectedSize = size;
    
    // Update selected size visual
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    const selectedOption = [...document.querySelectorAll('.size-option')].find(option => 
        option.textContent === size
    );
    
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}

// Update quantity
function updateQuantity(quantity) {
    if (quantity < 1) quantity = 1;
    if (quantity > 10) quantity = 10;
    
    currentQuantity = quantity;
    document.getElementById('quantity').value = quantity;
}

// Increase quantity
function increaseQuantity() {
    updateQuantity(currentQuantity + 1);
}

// Decrease quantity
function decreaseQuantity() {
    updateQuantity(currentQuantity - 1);
}

// Add to cart
function addToCart() {
    if (!selectedColor || !selectedSize) {
        showErrorMessage('Please select color and size');
        return;
    }

    // Use the global addToCart function from script.js
    window.addToCart(currentProduct.id, selectedColor, selectedSize, currentQuantity);
}

// Buy now
function buyNow() {
    if (!selectedColor || !selectedSize) {
        showErrorMessage('Please select color and size');
        return;
    }

    // Add to cart first
    window.addToCart(currentProduct.id, selectedColor, selectedSize, currentQuantity);
    
    // Redirect to checkout
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 500);
}

// Load related products
function loadRelatedProducts() {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid || !window.products) return;

    // Get products from same category, excluding current product
    const relatedProducts = window.products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4); // Show only 4 related products

    if (relatedProducts.length === 0) {
        relatedGrid.innerHTML = '<p>No related products found.</p>';
        return;
    }

    relatedGrid.innerHTML = relatedProducts.map(product => `
        <div class="product-card fade-in" onclick="viewRelatedProduct(${product.id})">
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

// View related product
function viewRelatedProduct(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.reload();
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
window.changeMainImage = changeMainImage;
window.selectColor = selectColor;
window.selectSize = selectSize;
window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.addToCart = addToCart;
window.buyNow = buyNow;
window.viewRelatedProduct = viewRelatedProduct;