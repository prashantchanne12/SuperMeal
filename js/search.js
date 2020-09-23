const form = document.querySelector('form');
let value = '3';

document.getElementById("country").addEventListener('change', e => {
    var selectElement = e.target;
    value = selectElement.value;
});

document.querySelector('input').addEventListener('keyup', e => {
    e.preventDefault();

    searchHotels(value, e.target.value);
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

        console.log(data)
    }
}

const hotels = new Hotels();

const searchHotels = (value, query) => {

    hotels.getSearchResults(`https://developers.zomato.com/api/v2.1/search?entity_id=${value}&entity_type=city&q=${query}&count=100
    `);

}