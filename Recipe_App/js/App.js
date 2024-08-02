const searchBox = document.querySelector('.searchBox');
const searchbtn = document.querySelector('.searchbtn');
const recipeContainer = document.querySelector('.recipe-container');

// Function to get recipes
const fetchRecipe = async (query) => {
    try {
        recipeContainer.innerHTML = "Fetching Recipes..."; 
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        // Handle the data (display recipes)
        // Clear the previous recipes
        recipeContainer.innerHTML = '';

        if (data.meals) {
            data.meals.forEach(meal => {
                const recipeElement = document.createElement('div');
                recipeElement.className = 'recipe';
                recipeElement.innerHTML = `
                    <h3>${meal.strMeal}</h3>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <p>${meal.strInstructions.substring(0, 100)}...</p>
                    <a href="${meal.strSource}" target="_blank">View Recipe</a>
                `;
                recipeContainer.appendChild(recipeElement);
            });
        } else {
            recipeContainer.innerHTML = '<p>No recipes found</p>';
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
        recipeContainer.innerHTML = '<p>Error fetching recipes. Please try again later.</p>';
    }
}

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (searchInput) {
        fetchRecipe(searchInput);
    } else {
        recipeContainer.innerHTML = '<p>Please enter a search term</p>';
    }
});
