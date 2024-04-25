document.getElementById('decrease').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

document.getElementById('increase').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
});

// Add event listener to the Add to Cart button
document.querySelector('.add-to-cart-button').addEventListener('click', function() {
    // Redirect to cart page or perform add to cart functionality
    window.location.href = '#cart'; // Use the actual link to your cart page
});

// Add event listeners to the pack buttons
document.querySelectorAll('.pack-button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Perform action when pack is selected
        document.querySelectorAll('.pack-button').forEach(function(btn) {
            btn.classList.remove('selected'); // Remove 'selected' from all buttons
        });
        this.classList.add('selected'); // Add 'selected' to clicked button
    });
});