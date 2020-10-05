
const cartCount = document.querySelector('.cart-count');
const foo = JSON.parse(localStorage.getItem('cartItems'));

cartCount.innerHTML = foo.length.toString();

const prevCartItems = JSON.parse(localStorage.getItem('cartItems'));

const cartItems = document.querySelector('.cart-items');

class Cart {

    createCartItemCards = () => {
        cartItems.innerHTML = '';

        prevCartItems.forEach(data => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `
        <div class="menu" id=${data.id}>
            <img src="${data.img}"
                alt="" class="menu-img">
            <div class="menu-details">
                <h3 class="menu-title">${data.name}</h3>
                <div class="menu-rating">
                    <i class="fa fa-star"></i>
                    <p class="ratings">${data.rating}</p>
                    <p class="total-votes">(${data.votes})</p>
                </div>
                <p class="price">${data.price}</p>
            </div>
            <div class="quantity">${data.quantity}</div>
            <div class="close">X</div>
        </div>
        <div class="line"></div>
            `;

            cartItems.appendChild(cartItem);

        });
    }

}

const cart = new Cart();
cart.createCartItemCards();