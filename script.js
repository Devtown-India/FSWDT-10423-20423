// api that returns us the position & stats of the ISS

const getData = async ()=>{
    try {
        const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const {latitude:lat,longitude:lon,velocity:speed,altitude:alt} = await res.json();
        console.log({lat,lon,speed,alt});
        return {lat,lon,speed,alt};
    } catch (error) {
        console.log(error);
    }
}

setInterval(getData,1000);

// lat lon
var map = L.map('map').setView([28.70, 77.10], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);