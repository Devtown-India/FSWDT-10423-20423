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

getData()