const API_KEY = 'c4baab94dfe94734ac05af4ea9887d7f';

document.getElementById('mealPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const goal = document.getElementById('goal').value;
    const weightRange = document.getElementById('weightRange').value; 

    fetchMealSuggestions(weightRange, goal);
});

async function fetchMealSuggestions(weightRange, goal) {
    const dietType = getDietType(goal);
    const url = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietType}&number=5&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMealSuggestions(data.results);
    } catch (error) {
        console.error('Error fetching meal suggestions:', error);
        document.getElementById('mealSuggestions').innerHTML = '<p>Error fetching meal suggestions. Please try again later.</p>';
    }
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

    meals.forEach(meal => {
        const mealItem = document.createElement('div');
        mealItem.className = 'meal-item';
        mealItem.innerHTML = `
            <img src="${meal.image}" alt="${meal.title}" class="meal-image">
            <div class="meal-info">
                <h3>${meal.title}</h3>
                <p>Calories: ${meal.calories || 'N/A'}</p>
            </div>
        `;
        mealSuggestionsDiv.appendChild(mealItem);
    });
}