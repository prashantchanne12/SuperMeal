const button = document.querySelector('.btn');
const profile = document.querySelector('.profile');
const profileOptions = document.querySelector('.profile-options');

button.addEventListener('click', e => {
    e.preventDefault();
    console.log('ÇLiked');
    window.location.href = '../pages/nearby.php';
});

if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', JSON.stringify([]));
}

profile.addEventListener('click', event => {
    event.preventDefault();

    if (profileOptions.style.display === "none") {
        profileOptions.style.display = "block";
    } else {
        profileOptions.style.display = "none";
    }

});