// api that returns us the position & stats of the ISS



// lat lon and zoom level
var map = L.map('map').setView([28.70, 77.10], 1);

var customIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/440494/international-space-station.svg',
    iconSize: [38, 95],
});

const marker = L.marker([28.70, 77.10],{
    icon: customIcon
}).addTo(map)
.openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



const getData = async ()=>{
    try {
        const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const {latitude:lat,longitude:lon,velocity:speed,altitude:alt} = await res.json();
        L.circle([lat,lon], {
            color: 'black',
            fillColor: '#111',
            fillOpacity: 0.5,
            radius: 5
        }).addTo(map);
        marker.setLatLng([lat,lon]);
        return {lat,lon,speed,alt};
    } catch (error) {
        console.log(error);
    }
}

setInterval(getData,1000);
