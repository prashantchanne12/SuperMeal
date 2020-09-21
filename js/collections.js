const hotelsPage = document.querySelector('.hotels');

const options = {
    method: "GET",
    headers: new Headers({
        "Accept": "application/json",
        "user-key": "765783951f7a06cd0cc231c7ba042d31",
    }),
};

// ----- CREATING HTML -------
const createHotelCards = (hotels) => {


    hotels.collections.forEach(hotel => {

        const hotelCard = document.createElement('div');
        hotelCard.id = hotel.collection.collection_id;
        hotelCard.classList.add('hotel-card')

        hotelCard.innerHTML = `
        <img src="${hotel.collection.image_url}" alt="">
        <div class="hotel-details">
            <p class="title">${hotel.collection.title}</p>
            <p class="desc">${hotel.collection.description}</p>
        </div>
        `;

        hotelsPage.appendChild(hotelCard);

    });
}


// ------ FETCHING NEARBY RESTAURANTS BASED ON CURRENT LOCATION --------
const getNearbyRestaurants = async (url) => {
    const response = await fetch(url, options);


    if (response.status !== 200) {
        throw new Error('Can not fetch the data');
    }

    const data = await response.json();
    createHotelCards(data);

}

// ----- GETTING CURRENT LOCATION ------
const getLatLong = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
        getNearbyRestaurants(`https://developers.zomato.com/api/v2.1/collections?lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
    }
}

// getLatLong();


/*
     <div class="hotel-card">
                <img src="../images/landing-1.webp" alt="">
                <div class="hotel-details">
                    <p class="title">Hotel Maria</p>
                    <p class="desc">Hello world this is me elliot aldersion</p>
                </div>
            </div>
*/