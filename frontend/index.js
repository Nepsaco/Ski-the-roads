// const heroMap = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
const id = 32
const container = document.querySelector('#cardContainer')

getMountainId()
    .then(mountains => mapMountains(mountains, createCard))
// loadScript(heroMap)
// addMarker()








function appendElement(container, element){
    container.append(element)
}

function createCard(mountain){
    const card = document.createElement('div')
    card.className = 'mountainCard'
    card.textContent = mountain.name
    card.id = mountain.mountain_id
    appendElement(container, card)
    card.addEventListener('click', mountainCardClick)
    return card
}

function mountainCardClick(event){
    return getMountainInfo(event.target.id)
}

function mapMountains(mountains, definition){
    return mountains.map(definition)
}

function getMountainId(){
    return fetch('http://localhost:9000/mountains')
        .then(handleResponse)
}

function handleResponse(response){
    return response.json()
}

function getMountainInfo(mountain_id){
    return fetch(`https://cors-anywhere.herokuapp.com/https://skimap.org/SkiAreas/view/${mountain_id}.json`)
        .then(handleResponse)
}

// function initMap(){
//     const colorado = {lat:39.113, lng:-105.358}
//     const mapProp = {
//         center: colorado,
//         zoom: 7
//     }
//     const map = new google.maps.Map(document.getElementById('map'), mapProp)
// }

// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// function addMarker(coordinates){
//     const marker = new google.maps.Marker({
//         position:coordinates,
//         map:map,
//     })
// }
