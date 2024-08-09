const products = [
    {
        name: "Product 1",
        price: 29.99,
        description: "Description for product 1",
        imageUrl: "https://images.pexels.com/photos/27583524/pexels-photo-27583524/free-photo-of-a-black-and-white-photo-of-a-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        name: "Product 2",
        price: 49.99,
        description: "Description for product 2",
        imageUrl: "https://images.pexels.com/photos/27553257/pexels-photo-27553257/free-photo-of-processed-with-vsco-with-m5-preset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        name: "Product 3",
        price: 19.99,
        description: "Description for product 3",
        imageUrl: "https://images.pexels.com/photos/27101553/pexels-photo-27101553/free-photo-of-a-cocktail-with-mint-and-lime-in-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productCard = `
        <div class="product-card">
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        </div>
    `;
    productList.innerHTML += productCard;
});

let cart = [];

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartSection = document.getElementById('cart');
    cartSection.innerHTML = '<h2>Shopping Cart</h2>';

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartSection.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - $${item.price} x ${item.quantity}</span>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });

    cartSection.innerHTML += `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert('Your cart is empty. Add items to the cart before placing an order.');
        return;
    }

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    const orderDetails = `
        <h3>Order Confirmation</h3>
        <p>Thank you, ${name}! Your order has been placed.</p>
        <p>Shipping to: ${address}</p>
        <h4>Order Summary:</h4>
        <ul>
            ${cart.map(item => `<li>${item.name} - $${item.price} x ${item.quantity}</li>`).join('')}
        </ul>
        <h4>Total Price: $${calculateTotalPrice().toFixed(2)}</h4>
        <button onclick="startNewOrder()">Place a New Order</button>
    `;

    document.getElementById('checkout-form').innerHTML = orderDetails;

    cart = [];
    updateCart();
});

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function startNewOrder() {
    const formHtml = `
        <h2>Checkout</h2>
        <input type="text" id="name" placeholder="Name" required>
        <input type="text" id="address" placeholder="Address" required>
        <button type="submit">Place Order</button>
    `;

    document.getElementById('checkout-form').innerHTML = formHtml;

    
}
