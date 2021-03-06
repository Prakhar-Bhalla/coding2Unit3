let container = document.getElementById("container");
function getMeals() {
    let meals = JSON.parse(localStorage.getItem("foodCart"));
    console.log(meals);
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
        nDiv.append(imageDiv, name);
        container.append(nDiv);
    });
}

getMeals();

let btn = document.getElementsByTagName("button");
btn[0].onclick = function(){
    alert("Your order is accepted");
    setTimeout(function() {
        alert("Your order is being cooked");
    }, 3000)
    setTimeout(function() {
        alert("Your order is ready");
    }, 8000) 
    setTimeout(function() {
        alert("Order out for delivery");
    }, 10000)
    setTimeout(function() {
        alert("Order delivered");
    }, 12000)
    container.innerHTML = null;
}
