const hotelDetailsElement = document.querySelector('.hotel');

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

    <h3 class="overview">Overview</h3>
    <div class="line"></div>

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
    </div>`;

        hotelDetailsElement.appendChild(hotelDetails);

    }
}

const hotel = new Hotel();

hotel.fetchHotelData(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${localStorage.getItem('currentHotel')}
`).then(data => {
    hotel.createHotelDetailsPage(data);
}).catch(e => {
    console.log(e);
});

