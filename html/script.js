// script.js

// This script could contain basic form validation or product fetching logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Auction platform script loaded');
});
// script.js

// Function to display bid options when a product is clicked
function showBidOption(productName) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => product.classList.remove('active'));
    
    const productElement = document.querySelector(`.product[onclick="showBidOption('${productName}')"]`);
    productElement.classList.add('active');
}

// Function to handle placing a bid
function placeBid(productName) {
    alert(`Bid placed on ${productName}`);
    saveOrder(productName, 'Bid');
}

// Function to handle placing an order
function placeOrder(productName) {
    alert(`Order placed for ${productName}`);
    saveOrder(productName, 'Order');
}

// Function to save the order (bid or purchase) - Simulated for demonstration
function saveOrder(productName, type) {
    const order = {
        productName: productName,
        type: type,
        date: new Date().toLocaleDateString()
    };
    console.log('Order saved:', order);
    // Code to save order to the "Orders" page would go here
}
