const button = document.querySelector('.btn');

button.addEventListener('click', e => {
    e.preventDefault();
    console.log('ÇLiked');
    window.location.href = '../pages/nearby.php';
});

if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', JSON.stringify([]));
}