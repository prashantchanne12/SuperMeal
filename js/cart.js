
const cartCount = document.querySelector('.cart-count');
const foo = JSON.parse(localStorage.getItem('cartItems'));

cartCount.innerHTML = foo.length.toString();

const prevCartItems = JSON.parse(localStorage.getItem('cartItems'));
const cartItems = document.querySelector('.cart-items');
const totalAmount = document.querySelector('.total-price');

const array = document.querySelector('.array');
const quantity = document.querySelector('.quantity');

class Cart {

    createCartItemCards = () => {
        cartItems.innerHTML = '';

        prevCartItems.forEach(data => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML =
                `<div class="menu" id=${data.id}>
                    <section class="details">
                        <div class="image-container">
                            <img src="${data.img}" alt="" class="menu-img">
                        </div>
                        <div class="menu-details">
                            <h3 class="menu-title">${data.name}</h3>
                            <div class="menu-rating">
                                <i class="fa fa-star"></i>
                                <p class="ratings">${data.rating}</p>
                                <p class="total-votes">(${data.votes})</p>
                            </div>
                        </div>
                    </section>
                    <div class="quantity">${data.quantity}</div>
                    <div class="price">₹ ${data.price}</div>
                </div>
                 <div class="line"></div>

`;

            cartItems.appendChild(cartItem);

        });
    }

    calculateTotalAmount = () => {
        const items = JSON.parse(localStorage.getItem('cartItems'));
        let total = 0
        items.forEach(cartItem => {
            total += parseInt(cartItem.price);
        });

        const productId = [];
        const productCount = [];

        items.forEach(item => {
            productId.push(item.id);
            productCount.push(item.quantity);
        });

        array.value = productId;
        quantity.value = productCount;

        totalAmount.innerHTML = `₹ ${total}`;
    }




}

const cart = new Cart();
cart.createCartItemCards();
cart.calculateTotalAmount();