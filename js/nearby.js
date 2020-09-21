const hotelsPage = document.querySelector('.hotels');



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

        restraurants.forEach(hotel => {


            const hotelCard = document.createElement('div');
            hotelCard.id = hotel.restaurant.res_id;
            hotelCard.classList.add('hotel-card');

            const imgSrc = hotel.restaurant.thumb.toString().length !== 0 ? hotel.restaurant.thumb : '../images/landing-1.webp';



            hotelCard.innerHTML = `
            <img src=${imgSrc} alt="">
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
                ${hotel.restaurant.cuisines}
                </p>

                <p class="address">${hotel.restaurant.location.address}</p>
            </div>`;

            hotelsPage.appendChild(hotelCard);

        });
    }
}


const nearBy = new NearBy();
nearBy.getLatLong(async (positions) => {
    let { lat, long } = positions;

    const { zone, id } = await nearBy.getEntityAndZone(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`);

    const { restraurants, location } = await nearBy.getNearByRestraurants(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${id}&entity_type=${zone}
    `);

    nearBy.createHotelCards({ restraurants, location });

});





/*  <div class="hotel-card">
                <img src="../images/landing-1.webp" alt="">
                <div class="hotel-details">
                    <div class="title">
                        <p class="name">Hotel Maria</p>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <p>4.5</p>
                        </div>
                    </div>

                    <div class="cusions">
                        <i class="fa fa-dot-circle-o"></i>
                        <p>Cusions</p>
                    </div>

                    <p class="cusions-text">
                        Modern Indian, Maharashtrian
                        Modern Indian, Maharashtrian
                    </p>

                    <p class="address">Bandra Kurla Complex, Mumbai</p>
                </div>
            </div>*/