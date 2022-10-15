const loadMeal = (search) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>getMeal(data.meals))
}

const getMeal = meal =>{
    const setMeal = document.getElementById('meal-card')
    setMeal.innerHTML = ``;
    meal.forEach(meals=>{
        console.log(meals);
        const setEle = document.createElement('div');
        setEle.classList.add('col')
        setEle.innerHTML = `
            <div class="card rounded-0">
                <img src="${meals.strMealThumb}" class="card-img-top rounded-0" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meals.strMeal}</h5>
                <p class="card-text">${meals.strInstructions.slice(0,100)}</p>
                <a href="#" class="btn btn-danger">Buy Now</a>
                </div>
            </div>
        `;

        setMeal.appendChild(setEle);
    })
}

const searchFood = ()=>{
    const searchmeal = document.getElementById('take-text');
    const searchText = searchmeal.value;
    loadMeal(searchText);
    searchmeal.value = '';
}

loadMeal('fish');