const form = document.querySelector('form');
const hotelSearchRes = document.querySelector('.hotel-search');
let value = '3';

document.getElementById("country").addEventListener('change', e => {
    var selectElement = e.target;
    value = selectElement.value;
});

document.querySelector('input').addEventListener('keyup', e => {
    e.preventDefault();

    searchHotels(value, e.target.value);
});

hotelSearchRes.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('name')) {
        localStorage.setItem('currentHotel', e.target.parentElement.parentElement.id);
        window.location.replace('../pages/hotel.html');
    };
});



class Hotels {
    options = {
        method: "GET",
        headers: new Headers({
            "Accept": "application/json",
            "user-key": "765783951f7a06cd0cc231c7ba042d31",
        }),
    };

    getSearchResults = async (url) => {
        const response = await fetch(url, this.options);

        if (response.status !== 200) {
            throw new Error('Can not fetch the data');
        }

        const data = await response.json();

        return data.restaurants;
    }

    createSearchResultCards = (hotels) => {

        hotelSearchRes.innerHTML = '';

        console.log(hotels);

        hotels.forEach(hotel => {

            const hotelCard = document.createElement('div');
            hotelCard.id = hotel.restaurant.R.res_id;
            hotelCard.classList.add('hotel-card');

            const imgSrc = hotel.restaurant.thumb.toString().length !== 0 ? hotel.restaurant.thumb : '../images/landing-1.webp';

            hotelCard.innerHTML = `
            <img src="${imgSrc}" alt="">
            <div class="details">
                <div class="name">${hotel.restaurant.name}</div>
                <div class="locality">${hotel.restaurant.location.locality}</div>
                <div class="address">${hotel.restaurant.location.address}
                </div>
                <div class="cusions">
                    <p>Top Cusions</p>
                    <p>${hotel.restaurant.cuisines}</p>
                </div>
                <div class="cost">
                    <p>Cost For Two</p>
                    <p>₹ ${hotel.restaurant.average_cost_for_two}</p>
                </div>
            </div>
            <div class="ratings">
                <p class="ratings">${hotel.restaurant.user_rating.aggregate_rating}</p>
                <p class="votes">(${hotel.restaurant.user_rating.votes})</p>
            </div>            
            `

            hotelSearchRes.appendChild(hotelCard);
        });
    }
}

const hotels = new Hotels();

const searchHotels = async (value, query) => {

    const restaurants = await hotels.getSearchResults(`https://developers.zomato.com/api/v2.1/search?entity_id=${value}&entity_type=city&q=${query}&count=100
    `);

    hotels.createSearchResultCards(restaurants);
}

/*
 <div class="hotel-card">
                <img src="../images/landing-1.webp" alt="">
                <div class="details">
                    <div class="name">Hotel Maria</div>
                    <div class="locality">Sion</div>
                    <div class="address">40, Guru Kripa Building, Road 24, Near SIES College, Sion, Mumbai
                    </div>
                    <div class="cusions">
                        <p>Top Cusions</p>
                        <p>Fast Food, Street Food, South Indian, North Indian</p>
                    </div>
                    <div class="cost">
                        <p>Cost For Two</p>
                        <p>₹ 200</p>
                    </div>
                </div>
                <div class="ratings">
                    <p class="ratings">4.5</p>
                    <p class="votes">(3400)</p>
                </div>
            </div>
*/