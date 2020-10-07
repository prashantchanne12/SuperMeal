const hotelsPage = document.querySelector('.hotels');
const locationTitle = document.querySelector('.location');


hotelsPage.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('img')) {
        const currentHotel = e.target.parentElement.id;
        gotoHotelPage(currentHotel);
    }
    if (e.target.classList.contains('view')) {
        const currentHotel = e.target.parentElement.parentElement.id;
        gotoHotelPage(currentHotel);


    }
});

const gotoHotelPage = (currentHotel) => {
    localStorage.setItem('currentHotel', currentHotel);
    window.location.href = '../pages/hotel.html';
}

class NearBy {
    options = {
        method: "GET",
        headers: new Headers({
            "Accept": "application/json",
            "user-key": "765783951f7a06cd0cc231c7ba042d31",
        }),
    };

    getLatLong(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position) {
            callback({ lat: position.coords.latitude, long: position.coords.longitude });
        }

    }

    getEntityAndZone = async (url) => {
        const response = await fetch(url, this.options);


        if (response.status !== 200) {
            throw new Error('Can not fetch the data');
        }

        const data = await response.json();

        return { zone: data.location.entity_type, id: data.location.entity_id };
    }

    getNearByRestraurants = async (url) => {
        const response = await fetch(url, this.options);

        if (response.status !== 200) {
            throw new Error('Can not fetch the data');
        }

        const data = await response.json();

        return { restraurants: data.best_rated_restaurant, location: data.location.title };

    }

    createHotelCards = ({ restraurants, location }) => {

        locationTitle.innerHTML = `Your Loctaion ${location}`;


        restraurants.forEach(hotel => {


            const hotelCard = document.createElement('div');
            hotelCard.id = hotel.restaurant.R.res_id;
            hotelCard.classList.add('hotel-card');

            const imgSrc = hotel.restaurant.thumb.toString().length !== 0 ? hotel.restaurant.thumb : '../images/landing-1.webp';

            // const cusions =  ;



            hotelCard.innerHTML = `
            <img src=${imgSrc} alt="" class="img">
            <div class="hotel-details">
                <div class="title">
                    <p class="name">${hotel.restaurant.name}</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <p>${hotel.restaurant.user_rating.aggregate_rating}</p>
                    </div>
                </div>

                <div class="cusions">
                    <i class="fa fa-dot-circle-o"></i>
                    <p>Cusions</p>
                </div>

                <p class="cusions-text">
                ${hotel.restaurant.cuisines.toString().split(',').length >= 2 ? `${hotel.restaurant.cuisines.split(',')[0]} ${hotel.restaurant.cuisines.split(',')[1]}` : `${hotel.restaurant.cuisines.split(',')[0]}`
                }
                </p>

                <p class="address">${hotel.restaurant.location.address.toString().substring(0, 50)}....</p>

                <p class="view">View</p>
            </div>`
                ;

            hotelsPage.appendChild(hotelCard);

        });
    }
}


const nearBy = new NearBy();
nearBy.getLatLong(async (positions) => {
    let { lat, long } = positions;

    // console.log(lat);
    // console.log(long);

    // if (localStorage.getItem('lat') == lat && localStorage.getItem('long') == long) {
    //     nearBy.createHotelCards(JSON.parse(localStorage.getItem('data')));
    // } else {

    console.log('Fetching new data.....');

    // localStorage.setItem('lat', lat);
    // localStorage.setItem('long', long);


    const { zone, id } = await nearBy.getEntityAndZone(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`);

    const { restraurants, location } = await nearBy.getNearByRestraurants(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=${zone}
    `);
    let data = { restraurants, location };

    localStorage.setItem('data', JSON.stringify(data));

    nearBy.createHotelCards({ restraurants, location });



});