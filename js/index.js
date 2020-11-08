const button = document.querySelector('.btn');
const profile = document.querySelector('.profile');
const profileOptions = document.querySelector('.profile-options');

profileOptions.style.display === "none"

button.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'pages/nearby.php';
});

if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', JSON.stringify([]));
}

profile.addEventListener('click', () => {

    if (profileOptions.style.display === "none") {
        profileOptions.style.display = "block";
    } else {
        profileOptions.style.display = "none";
    }

});