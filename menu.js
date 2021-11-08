let container = document.getElementById("container");
async function getMeals() {
    container.innerHTML = null;
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    let data = await res.json();
    let meals = data.meals;
    meals.forEach(meal => {
        let nDiv = document.createElement("div");
        let imageDiv = document.createElement("div");
        let image = document.createElement("img");
        image.src = meal.strMealThumb;
        imageDiv.style.width = "100%";
        imageDiv.style.height = "270px";
        imageDiv.append(image);
        let name = document.createElement("p");
        name.innerText = meal.strMeal;
        let price = document.createElement("p");
        let sum = 200 + Math.floor(Math.random()*100);
        price.innerText = sum;
        let btn = document.createElement("button");
        btn.innerText = "Add To Cart";
        btn.onclick = function() {
            addtoCart(meal);
        }
        nDiv.append(imageDiv, name, price, btn);
        container.append(nDiv);
    });
}

getMeals();
let cart = [];
if(localStorage.getItem("foodCart") == null);
localStorage.setItem("foodCart", JSON.stringify(cart));

function addtoCart(meal) {
    let crt = JSON.parse(localStorage.getItem("foodCart"));
    crt.push(meal);
    localStorage.setItem("foodCart", JSON.stringify(crt));
}