const button = document.querySelector('.btn');

button.addEventListener('click', e => {
    e.preventDefault();

    window.location.replace('../pages/nearby.html');
});