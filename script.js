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
            </div>
        `;
        mealSuggestionsDiv.appendChild(mealItem);
    });
}

function displayWorkouts(goal) {
    const workoutSuggestions = getWorkoutsByGoal(goal);
    const workoutContainer = document.getElementById('workoutSuggestions');
    workoutContainer.innerHTML = ''; // Clear previous workouts

    workoutSuggestions.forEach(workout => {
        const workoutCard = document.createElement('div');
        workoutCard.className = 'workout-card';
        workoutCard.innerHTML = `
            <div class="workout-header">
                <h3>${workout.name}</h3>
                <span class="difficulty-badge ${workout.difficulty.toLowerCase()}">${workout.difficulty}</span>
            </div>
            <div class="workout-details">
                <p><strong>Duration:</strong> ${workout.duration}</p>
                <p><strong>Target:</strong> ${workout.target}</p>
                <div class="exercises">
                    <h4>Exercises:</h4>
                    <ul>
                        ${workout.exercises.map(exercise => `
                            <li>
                                <span class="exercise-name">${exercise.name}</span>
                                <span class="exercise-details">${exercise.sets} sets × ${exercise.reps}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
        workoutContainer.appendChild(workoutCard);
    });
}

function getWorkoutsByGoal(goal) {
    const workouts = {
        bulk: [
            {
                name: "Strength Building Workout",
                difficulty: "Intermediate",
                duration: "60 minutes",
                target: "Full Body",
                exercises: [
                    { name: "Barbell Squats", sets: 4, reps: "8-10" },
                    { name: "Bench Press", sets: 4, reps: "8-10" },
                    { name: "Deadlifts", sets: 4, reps: "6-8" },
                    { name: "Overhead Press", sets: 3, reps: "8-10" },
                    { name: "Barbell Rows", sets: 3, reps: "8-10" }
                ]
            },
            {
                name: "Mass Builder",
                difficulty: "Advanced",
                duration: "75 minutes",
                target: "Compound Movements",
                exercises: [
                    { name: "Romanian Deadlifts", sets: 4, reps: "8-12" },
                    { name: "Pull-ups", sets: 4, reps: "8-12" },
                    { name: "Dips", sets: 3, reps: "10-12" },
                    { name: "Military Press", sets: 3, reps: "8-10" }
                ]
            }
        ],
        lose_weight: [
            {
                name: "Fat Burning HIIT",
                difficulty: "Intermediate",
                duration: "30 minutes",
                target: "Full Body + Cardio",
                exercises: [
                    { name: "Burpees", sets: 3, reps: "45 seconds" },
                    { name: "Mountain Climbers", sets: 3, reps: "45 seconds" },
                    { name: "Jump Squats", sets: 3, reps: "45 seconds" },
                    { name: "Push-ups", sets: 3, reps: "45 seconds" }
                ]
            },
            {
                name: "Cardio Circuit",
                difficulty: "Beginner",
                duration: "45 minutes",
                target: "Cardiovascular",
                exercises: [
                    { name: "Jumping Jacks", sets: 3, reps: "1 minute" },
                    { name: "High Knees", sets: 3, reps: "1 minute" },
                    { name: "Jump Rope", sets: 3, reps: "1 minute" },
                    { name: "Bodyweight Squats", sets: 3, reps: "20" }
                ]
            }
        ],
        maintain: [
            {
                name: "Maintenance Workout",
                difficulty: "Intermediate",
                duration: "45 minutes",
                target: "Full Body",
                exercises: [
                    { name: "Push-ups", sets: 3, reps: "12-15" },
                    { name: "Bodyweight Squats", sets: 3, reps: "15-20" },
                    { name: "Dumbbell Rows", sets: 3, reps: "12-15" },
                    { name: "Planks", sets: 3, reps: "45 seconds" }
                ]
            }
        ],
        diet: [
            {
                name: "Low Impact Cardio",
                difficulty: "Beginner",
                duration: "30 minutes",
                target: "Fat Loss",
                exercises: [
                    { name: "Walking", sets: 1, reps: "15 minutes" },
                    { name: "Cycling", sets: 1, reps: "15 minutes" },
                    { name: "Stretching", sets: 1, reps: "5 minutes" }
                ]
            }
        ],
        gain_weight: [
            {
                name: "Muscle Building",
                difficulty: "Advanced",
                duration: "90 minutes",
                target: "Hypertrophy",
                exercises: [
                    { name: "Barbell Squats", sets: 5, reps: "5" },
                    { name: "Deadlifts", sets: 5, reps: "5" },
                    { name: "Bench Press", sets: 5, reps: "5" },
                    { name: "Pull-ups", sets: 4, reps: "8-12" }
                ]
            }
        ]
    };

    return workouts[goal] || [];
}

document.getElementById('mealPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const goal = document.getElementById('goal').value;
    const weightRange = document.getElementById('weightRange').value; 

    fetchMealSuggestions(weightRange, goal);
    displayWorkouts(goal); 
});