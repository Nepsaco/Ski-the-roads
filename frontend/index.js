const container = document.querySelector('#cardContainer')
const hero = document.querySelector('#heroContainer')
let myMap
let directionsRenderer
let directionsService
let stepDisplay
let markerArray = []
let latLngObject


getMountainId()
    .then(mountains => mapMountains(mountains, createCard))
getApiKey()
    .then(loadScript)








function appendElement(container, ...element){
    container.append(...element)
}

function createCard(mountain){
    const card = document.createElement('div')
    const label = document.createElement('label')
    card.className = 'mountainCard'
    label.textContent = mountain.name
    label.id = mountain.mountain_id
    card.id = mountain.mountain_id

    appendElement(card, label)
    appendElement(container, card)
    card.addEventListener('click', mountainCardClick)
    return card
}

function createHero(mountain){
    const heroCard = document.createElement('div')
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul')
    const directions = document.createElement('div')

    heroCard.className = 'heroCard'
    h2.textContent = mountain.name
    ul.innerHTML = `<li>Lifts: ${mountain.lift_count}</li>
    <li>Runs: ${mountain.run_count}</li>
    <li>Annual Snowfall: ${mountain.annual_snowfall}</li>
    <li>Skiable Acreage: ${mountain.skiable_acreage} acres</li>
    <li>Website: <a href="${mountain.official_website}" target="_black">Click to visit</a></li>`

    directions.id = 'right-panel'

    appendElement(hero, heroCard)
    appendElement(heroCard, h2, ul, directions)

    calcRoute({lat: mountain.latitude, lng: mountain.longitude})

    return heroCard
}

function mountainCardClick(event){
    getMountainInfo(event.target.id)
        .then(createHero)
        .then(clearHero)
}

function clearHero(element){
    if(hero.childElementCount != 1){
        hero.firstElementChild.remove() 
    }
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

function getApiKey(){
    // dont push to production
    return fetch('http://localhost:9000/')
        .then(handleResponse)
}

function initMap(){
    directionsRenderer = new google.maps.DirectionsRenderer()
    directionsService = new google.maps.DirectionsService()

    const colorado = {lat:39.113, lng:-105.358}
    const mapProp = {
        center: colorado,
        zoom: 7
    }

    myMap = new google.maps.Map(document.getElementById('map'), mapProp)

    directionsRenderer.setMap(myMap)
}


function loadScript(key) {
    const API_KEY = key.key
    let script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
    script.async = false;
    document.body.append(script);
}

// function addMarker(latLngObject){
//     const marker = new google.maps.Marker({
//         setPosition:latLngObject,
//         map:myMap,
//     })
//     markerArray.push(marker)
// }

function calcRoute(latLngObject) {

    // markerArray.map(marker => {
    //     console.log(marker)
    //     marker.setMap(null)
    // })

    var start = {lat:39.7392, lng:-104.9903}
    var request = {
        origin: start,
        destination: latLngObject,
        travelMode: 'DRIVING', 
        drivingOptions: {
            departureTime: new Date(Date.now() + 10), 
            trafficModel: 'pessimistic'
        }
    };

    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setPanel(null)
           directionsRenderer.setPanel(document.getElementById('right-panel'))
            directionsRenderer.setDirections(result);
        }
    });
}

// function showSteps(directionResult) {
//     var myRoute = directionResult.routes[0].legs[0];

//     for (var i = 0; i < myRoute.steps.length; i++) {
//         var marker = new google.maps.Marker({
//             position: myRoute.steps[i].start_point,
//             map: myMap
//         });
//         attachInstructionText(marker, myRoute.steps[i].instructions);
//         markerArray[i] = marker;
//     }
// }

// function attachInstructionText(marker, text){
//     google.maps.event.addListenter(marker, 'click', () => {
//         stepDisplay.setContent(text)
//         stepDisplay.open(myMap, marker)
//     })
// }

