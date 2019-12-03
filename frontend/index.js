const heroMap = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
const id = 32

getMountainId()
getMountainInfo(id)
loadScript(heroMap)
addMarker()










function getMountainId(){
    return fetch('http://localhost:9000/mountains')
        .then(handleResponse)
}

function handleResponse(response){
    return response.json()
}

function getMountainInfo(id){
    return fetch(`https://cors-anywhere.herokuapp.com/https://skimap.org/SkiAreas/view/${id}.json`)
        .then(handleResponse)
}

function initMap(){
    const colorado = {lat:39.113, lng:-105.358}
    const mapProp = {
        center: colorado,
        zoom: 7
    }
    const map = new google.maps.Map(document.getElementById('map'), mapProp)
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

function addMarker(coordinates){
    const marker = new google.maps.Marker({
        position:coordinates,
        map:map,
    })
}
