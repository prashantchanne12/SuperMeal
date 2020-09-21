const getData = async () => {

    const options = {
        method: "GET",
        headers: new Headers({
            "Accept": "application/json",
            "user-key": "765783951f7a06cd0cc231c7ba042d31",
        }),
    };


    const response = await fetch('https://developers.zomato.com/api/v2.1/categories', options);


    if (response.status !== 200) {
        throw new Error('Can not fetch the data');
    }

    const data = await response.json();
    console.log(data);
}

const getLatLong = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
}

// getData();
// getLatLong();