let container = document.getElementById("container");
function getMeals() {
    container.innerHTML = null;
    let meals = JSON.parse(localStorage.getItem("foodCart"));
    console.log(meals);
    meals.forEach(meal => {
        let nDiv = document.createElement("div");
        let imageDiv = document.createElement("div");
        let image = document.createElement("img");
        image.src = meal.strMealThumb;
        imageDiv.style.width = "100%";
        imageDiv.style.height = "200px";
        imageDiv.append(image);
        let name = document.createElement("p");
        name.innerText = meal.strMeal;
        nDiv.append(imageDiv, name);
        container.append(nDiv);
    });
}

getMeals();
