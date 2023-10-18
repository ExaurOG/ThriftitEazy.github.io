const cartItems = [
    { product: "Product 1", price: 899 },
    { product: "Product 2", price: 999 },
    // Add more items as needed
];

// Function to calculate and update the total
function updateTotal() {
    const totalPriceElement = document.getElementById("total-price");
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = `PHP ${totalAmount.toFixed(2)}`;
}

// Function to add items to the cart (you can call this when adding items to the cart)
function addToCart(product, price) {
    cartItems.push({ product, price });
    updateTotal();
}



// Example usage:
addToCart("Product 1", 899);
addToCart("Product 2", 999);

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const orderForm = document.getElementById("order-form");

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productArticle = button.closest(".product");
            const productName = productArticle.querySelector("h2").textContent;
            const productPrice = parseFloat(productArticle.querySelector(".price").textContent.replace(/[^0-9.]/g, ''));

            const newRow = createTableRow(productName, productPrice);
            cartItemsContainer.appendChild(newRow);

            total += productPrice;
            updateTotal();
        });
    });

    orderForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        // Handle order submission here
        const orderDetails = {
            name,
            email,
            address,
            total: total.toFixed(2)
        };

        displayOrderConfirmation(orderDetails);
    });

    function createTableRow(name, price) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${price.toFixed(2)}</td>
        `;
        return newRow;
    }

    function displayOrderConfirmation(details) {
        // Replace this with your actual order submission logic
        alert(`Order placed!\n\nName: ${details.name}\nEmail: ${details.email}\nAddress: ${details.address}\n\nTotal: PHP ${details.total}`);
    }
});
// Add this JavaScript code to your script.js file
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

let slideIndex = 0;

function showSlide(index) {
    if (index < 0) {
        slideIndex = slider.children.length - 1;
    } else if (index >= slider.children.length) {
        slideIndex = 0;
    }

    const translateX = -slideIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Automatically advance the slider every few seconds (optional)
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000); // Change slide every 5 seconds (adjust as needed)
