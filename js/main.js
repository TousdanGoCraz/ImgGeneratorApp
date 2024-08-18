document.querySelector('input').addEventListener('click',getFetch)
//let datito = Math.floor(Math.random() * 1000)

function getFetch(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let choice = Math.floor(Math.random() * data.photos.length)
        document.querySelector('h2').innerText = data.photos[choice].rover.name
        document.querySelector('img').src = data.photos[choice].img_src
        document.querySelector('#date').innerText = data.photos[choice].earth_date
        
    })
}