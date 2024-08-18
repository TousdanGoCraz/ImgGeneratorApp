document.querySelector('input').addEventListener('click',getFetch)
//let datito = Math.floor(Math.random() * 1000)

function getFetch(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('#drinkCategory').innerText = data.drinks[0].strCategory
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('#alcoholic').innerText = data.drinks[0].strAlcoholic
        document.querySelector('#glass').innerText = data.drinks[0].strGlass
        document.querySelector('#instr').innerText = data.drinks[0].strInstructions
    })
}