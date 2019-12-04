// const heroMap = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`
const id = 32
const container = document.querySelector('#cardContainer')
const hero = document.querySelector('#heroContainer')

getMountainId()
    .then(mountains => mapMountains(mountains, createCard))
// loadScript(heroMap)
// addMarker()








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

    heroCard.className = 'heroCard'
    h2.textContent = mountain.name
    ul.innerHTML = `<li>Lifts: ${mountain.lift_count}</li>
    <li>Runs: ${mountain.run_count}</li>
    <li>Annual Snowfall: ${mountain.annual_snowfall}</li>
    <li>Skiable Acreage: ${mountain.skiable_acreage} acres</li>
    <li>Website: <a href="${mountain.official_website}" target="_black">Click to visit</a></li>`


    appendElement(hero, heroCard)
    appendElement(heroCard, h2, ul)
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
