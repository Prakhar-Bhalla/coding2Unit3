async function getMeals() {
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    let data = await res.json();
    console.log(data);
}

getMeals();