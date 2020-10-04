const hotelDetailsElement = document.querySelector('.hotel');
const hotelMenuElement = document.querySelector('.menus');

const cartCount = document.querySelector('.cart-count');

const foo = JSON.parse(localStorage.getItem('cartItems'));
cartCount.innerHTML = foo.length.toString();

const prevCartItems = JSON.parse(localStorage.getItem('cartItems'));

hotelDetailsElement.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('order-online')) {

        e.target.parentElement.nextElementSibling.nextElementSibling.style = 'display:none';

        e.target.classList.add('active');
        e.target.previousElementSibling.classList.remove('active');

        hotelMenuElement.style = 'display:block';

        hotel.createMenuCards();

    }

    if (e.target.classList.contains('overview')) {

        hotelMenuElement.style = 'display:none';

        e.target.parentElement.nextElementSibling.nextElementSibling.style = 'display:block';

        e.target.nextElementSibling.classList.remove('active');
        e.target.classList.add('active');

    }

});

cartCount.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = '../pages/cart.php';
})

hotelMenuElement.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('add')) {
        const id = e.target.parentElement.
            parentElement.id;
        addToCart(id);
    }
});


const addToCart = (id) => {
    cartCount.innerHTML = parseInt(cartCount.textContent) + 1;

    prevCartItems.push(menu[id]);

    localStorage.setItem('cartItems', JSON.stringify
        (prevCartItems));
}

class Hotel {
    options = {
        method: "GET",
        headers: new Headers({
            "Accept": "application/json",
            "user-key": "765783951f7a06cd0cc231c7ba042d31",
        }),
    };

    fetchHotelData = async (url) => {
        const response = await fetch(url, this.options);

        if (response.status !== 200) {
            throw new Error('Can not fetch the data');
        }

        const data = await response.json();

        return data;
    }

    createHotelDetailsPage(hotel) {

        const imgSrc = hotel.featured_image.toString().length !== 0 ? hotel.featured_image : '../images/landing-1.webp';

        let str = '';

        hotel.cuisines.split(',').forEach(h => {
            str += `<p class="tag">${h}</p>`
        });

        const hotelDetails = document.createElement('div');
        hotelDetails.innerHTML = `
        <img src="${imgSrc}" alt="">

    <div class="hotel-details">
        <div class="title">
            <h2>${hotel.name}</h2>
            <p>${hotel.cuisines}</p>
        </div>
        <div class="ratings">
            <i class="fa fa-star"></i>
            <p class="rating">${hotel.user_rating.aggregate_rating}</p>
            <p class="count">(${hotel.user_rating.votes} user votes)</p>
        </div>

    </div>


    <div class="location">
        <p>${hotel.location.locality}</p>
    </div>

    <div class="timing">
        <p>Timing</p>
        <p>${hotel.timings}</p>
    </div>

    <div class="tabs">
        <h3 class="overview active">Overview</h3>
        <h3 class="order-online">Order Online</h3>
    </div>
    <div class="line"></div>

    <div class="overview-section">
        <div class="hotel-cusions">
            <p class="title">Top Cusions</p>
            ${str}
        </div>

        <div class="avg-cost">
            <p class="title">Average Cost for Two People</p>
            <p> ₹ ${hotel.average_cost_for_two}</p>
        </div>

        <div class="address">
            <p class="title">Address</p>
            <p>${hotel.location.address}</p>
        </div>

        <div class="phone-number">
            <p class="title">Phone Number</p>
            <p>${hotel.phone_numbers}</p>
        </div>
    </div>
    `;

        hotelDetailsElement.appendChild(hotelDetails);

    }

    createMenuCards() {
        hotelMenuElement.innerHTML = '';

        menu.forEach(data => {
            const menuDetails = document.createElement('div');
            menuDetails.innerHTML = `
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
                <button class="add">Add</button>
            </div>
        </div>
        <div class="line"></div>
            `;

            hotelMenuElement.appendChild(menuDetails);
        });
    }
}

const hotel = new Hotel();
hotel.fetchHotelData(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${localStorage.getItem('currentHotel')}
`).then(data => {
    hotel.createHotelDetailsPage(data);
}).catch(e => {
    console.log(e);
});
