const profile = document.querySelector('.profile');
const profileOptions = document.querySelector('.profile-options');

profileOptions.style.display === "none"


profile.addEventListener('click', () => {

    if (profileOptions.style.display === "none") {
        profileOptions.style.display = "block";
    } else {
        profileOptions.style.display = "none";
    }

});