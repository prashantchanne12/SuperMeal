
const cartCount = document.querySelector('.cart-count');
const foo = JSON.parse(localStorage.getItem('cartItems'));

cartCount.innerHTML = foo.length.toString();

const prevCartItems = JSON.parse(localStorage.getItem('cartItems'));

