const API_KEY = 'c4baab94dfe94734ac05af4ea9887d7f';

document.getElementById('mealPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const goal = document.getElementById('goal').value;
    const weightRange = document.getElementById('weightRange').value; 

    fetchMealSuggestions(weightRange, goal);
});

async function fetchMealSuggestions(weightRange, goal) {
    const dietType = getDietType(goal);
    const mealCount = document.getElementById('mealCount').value || 20;
    const url = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietType}&number=${mealCount}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const mealDetailsPromises = data.results.map(meal => fetchMealDetails(meal.id));
        const mealDetails = await Promise.all(mealDetailsPromises);
        displayMealSuggestions(mealDetails);
    } catch (error) {
        console.error('Error fetching meal suggestions:', error);
        document.getElementById('mealSuggestions').innerHTML = '<p>Error fetching meal suggestions. Please try again later.</p>';
    }
}

async function fetchMealDetails(mealId) {
    const url = `https://api.spoonacular.com/recipes/${mealId}/information?apiKey=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
}

function getDietType(goal) {
    switch (goal) {
        case 'bulk':
            return 'high-protein';
        case 'diet':
            return 'vegetarian';
        case 'lose_weight':
            return 'low-carb';
        case 'gain_weight':
            return 'high-calorie';
        case 'maintain':
            return 'balanced';
        default:
            return '';
    }
}

function displayMealSuggestions(meals) {
    const mealSuggestionsDiv = document.getElementById('mealSuggestions');
    mealSuggestionsDiv.innerHTML = ''; // Clear previous suggestions

    const itemsPerPage = 5;
    let currentPage = 1;

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = meals.slice(start, end);

        mealSuggestionsDiv.innerHTML = ''; // Clear current page

        pageItems.forEach(meal => {
            const mealItem = document.createElement('div');
            mealItem.className = 'meal-item';
            mealItem.innerHTML = `
                <img src="${meal.image}" alt="${meal.title}" class="meal-image">
                <div class="meal-info">
                    <h3>${meal.title}</h3>
                    <p>Calories: ${meal.nutrition.nutrients.find(nutrient => nutrient.name === 'Calories').amount} kcal</p>
                </div>
            `;
            mealSuggestionsDiv.appendChild(mealItem);
        });

        // Add pagination controls
        const paginationDiv = document.createElement('div');
        paginationDiv.className = 'pagination';
        paginationDiv.innerHTML = `
            <button ${page === 1 ? 'disabled' : ''} onclick="showPage(${page - 1})">Previous</button>
            <span>Page ${page}</span>
            <button ${end >= meals.length ? 'disabled' : ''} onclick="showPage(${page + 1})">Next</button>
        `;
        mealSuggestionsDiv.appendChild(paginationDiv);
    }

    showPage(currentPage);

    // Make showPage function globally accessible
    window.showPage = showPage;
}