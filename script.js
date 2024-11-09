const API_KEY = 'c4baab94dfe94734ac05af4ea9887d7f';

document.getElementById('mealPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const goal = document.getElementById('goal').value;
    const weightRange = document.getElementById('weightRange').value;
    const gender = document.getElementById('gender').value;

    console.log("Goal:", goal);
    console.log("Weight Range:", weightRange);
    console.log("Gender:", gender);
    
    fetchMealSuggestions(weightRange, goal, gender);
    displayWorkouts(goal, gender);
});

function fetchMealSuggestions(weightRange, goal, gender) {
    const mealSuggestions = getMealsByGoalAndGender(goal, weightRange, gender);
    displayMeals(mealSuggestions);
}

function getMealsByGoalAndGender(goal, weightRange, gender) {
    const mealPlans = {
        male: {
            bulk: {
                under_150: [
                    "Breakfast: 3 whole eggs, 2 slices whole grain toast, 1 banana",
                    "Mid-morning: Protein shake with 2 scoops whey, 1 cup oats, 1 tbsp peanut butter",
                    "Lunch: 6 oz grilled chicken breast, 1 cup brown rice, 1 cup mixed vegetables",
                    "Afternoon snack: 1 cup Greek yogurt, 1/4 cup mixed nuts",
                    "Dinner: 8 oz lean beef steak, 1 large sweet potato, 2 cups broccoli",
                    "Evening: Casein protein shake, 1 tbsp almond butter"
                ],
                '150_200': [
                    "Breakfast: 4 whole eggs, 3 slices whole grain toast, 1 apple",
                    "Mid-morning: Mass gainer shake",
                    "Lunch: 8 oz grilled chicken breast, 1.5 cups brown rice, 1.5 cups mixed vegetables",
                    "Afternoon snack: 2 cups cottage cheese, 1/2 cup mixed berries",
                    "Dinner: 10 oz salmon fillet, 2 cups quinoa, 2 cups asparagus",
                    "Evening: 2 scoops casein protein, 2 tbsp peanut butter"
                ],
                over_200: [
                    "Breakfast: 5 whole eggs, 4 slices whole grain toast, 2 bananas",
                    "Mid-morning: Mass gainer shake with whole milk",
                    "Lunch: 10 oz grilled chicken breast, 2 cups brown rice, 2 cups mixed vegetables",
                    "Afternoon snack: 3 cups Greek yogurt, 1/2 cup granola, 1/4 cup mixed nuts",
                    "Dinner: 12 oz lean beef steak, 2 large sweet potatoes, 3 cups broccoli",
                    "Evening: Casein protein shake, 2 tbsp almond butter, 1 scoop oats"
                ]
            },
            lose_weight: {
                under_150: [
                    "Breakfast: 2 egg whites, 1 whole egg, whole grain toast, 1/2 avocado",
                    "Mid-morning: Apple with 1 tbsp almond butter",
                    "Lunch: Grilled chicken breast, mixed green salad, olive oil dressing",
                    "Afternoon snack: Greek yogurt with berries",
                    "Dinner: Baked salmon, steamed broccoli, quinoa",
                    "Evening: Protein shake or cottage cheese"
                ],
                '150_200': [
                    "Breakfast: Protein smoothie (whey, banana, spinach, almond milk)",
                    "Mid-morning: Hard-boiled eggs",
                    "Lunch: Turkey and vegetable soup, side salad",
                    "Afternoon snack: Carrot sticks with hummus",
                    "Dinner: Lean beef stir-fry with mixed vegetables",
                    "Evening: Casein protein shake"
                ],
                over_200: [
                    "Breakfast: Egg white omelet with spinach and tomatoes, whole grain toast",
                    "Mid-morning: Protein bar",
                    "Lunch: Grilled chicken breast, large mixed green salad, light dressing",
                    "Afternoon snack: Tuna on whole grain crackers",
                    "Dinner: Grilled lean steak, roasted vegetables, sweet potato",
                    "Evening: Greek yogurt with almonds"
                ]
            },
            maintain_weight: {
                under_150: [
                    "Breakfast: 3 eggs, whole grain toast, 1 apple",
                    "Mid-morning: Greek yogurt with berries",
                    "Lunch: Turkey sandwich on whole grain bread, carrot sticks",
                    "Afternoon snack: Protein shake",
                    "Dinner: Grilled chicken breast, quinoa, steamed vegetables",
                    "Evening: Small handful of mixed nuts"
                ],
                '150_200': [
                    "Breakfast: Oatmeal with protein powder, banana, and almonds",
                    "Mid-morning: Cottage cheese with pineapple",
                    "Lunch: Grilled salmon, brown rice, mixed vegetables",
                    "Afternoon snack: Whole grain crackers with hummus",
                    "Dinner: Lean beef stir-fry with vegetables and noodles",
                    "Evening: Greek yogurt with honey"
                ],
                over_200: [
                    "Breakfast: Whole grain waffles with peanut butter, scrambled eggs",
                    "Mid-morning: Protein bar",
                    "Lunch: Chicken and avocado wrap, side salad",
                    "Afternoon snack: Apple with almond butter",
                    "Dinner: Grilled steak, sweet potato, broccoli",
                    "Evening: Casein protein shake"
                ]
            },
        },
        female: {
            bulk: {
                under_150: [
                    "Breakfast: 2 eggs, oatmeal with berries, protein shake",
                    "Mid-morning: Apple with almond butter",
                    "Lunch: Grilled chicken salad with quinoa",
                    "Pre-workout: Greek yogurt with honey",
                    "Post-workout: Protein shake with banana",
                    "Dinner: Salmon, brown rice, asparagus"
                ],
                '150_200': [
                    "Breakfast: 3 eggs, overnight oats, protein shake",
                    "Mid-morning: Protein smoothie",
                    "Lunch: Turkey wrap with avocado",
                    "Pre-workout: Rice cake with peanut butter",
                    "Post-workout: Protein shake",
                    "Dinner: Grilled chicken, sweet potato, vegetables"
                ],
                over_200: [
                    "Breakfast: 3 eggs, protein pancakes, smoothie",
                    "Mid-morning: Greek yogurt parfait",
                    "Lunch: Tuna pasta salad",
                    "Pre-workout: Protein bar",
                    "Post-workout: Recovery shake",
                    "Dinner: Lean beef stir-fry with rice"
                ]
            },
            lose_weight: {
                under_150: [
                    "Breakfast: Greek yogurt with berries and chia seeds",
                    "Mid-morning: Small handful of almonds",
                    "Lunch: Grilled chicken salad with mixed greens and light vinaigrette",
                    "Afternoon snack: Apple slices with 1 tbsp peanut butter",
                    "Dinner: Baked cod, roasted vegetables, quinoa",
                    "Evening: Herbal tea"
                ],
                '150_200': [
                    "Breakfast: Spinach and mushroom egg white frittata",
                    "Mid-morning: Protein smoothie (1/2 scoop whey, berries, almond milk)",
                    "Lunch: Turkey and avocado wrap with whole grain tortilla",
                    "Afternoon snack: Celery sticks with hummus",
                    "Dinner: Grilled shrimp skewers, brown rice, steamed broccoli",
                    "Evening: Cottage cheese with cinnamon"
                ],
                over_200: [
                    "Breakfast: Overnight oats with protein powder and berries",
                    "Mid-morning: Hard-boiled egg",
                    "Lunch: Lentil soup with side salad",
                    "Afternoon snack: Greek yogurt with sliced almonds",
                    "Dinner: Grilled chicken breast, sweet potato, green beans",
                    "Evening: Sugar-free jello with whipped cream"
                ]
            },
            maintain_weight: {
                under_150: [
                    "Breakfast: Greek yogurt parfait with granola and berries",
                    "Mid-morning: Apple slices with almond butter",
                    "Lunch: Grilled chicken salad with mixed greens and light dressing",
                    "Afternoon snack: Carrot sticks with hummus",
                    "Dinner: Baked salmon, quinoa, roasted vegetables",
                    "Evening: Small handful of mixed nuts"
                ],
                '150_200': [
                    "Breakfast: 2 egg omelet with spinach and feta, whole grain toast",
                    "Mid-morning: Protein smoothie",
                    "Lunch: Turkey and avocado wrap with side salad",
                    "Afternoon snack: Greek yogurt with berries",
                    "Dinner: Grilled shrimp skewers, brown rice, steamed broccoli",
                    "Evening: Cottage cheese with cinnamon"
                ],
                over_200: [
                    "Breakfast: Oatmeal with protein powder, banana, and chia seeds",
                    "Mid-morning: Hard-boiled eggs",
                    "Lunch: Tuna salad sandwich on whole grain bread, vegetable soup",
                    "Afternoon snack: Protein bar",
                    "Dinner: Grilled chicken breast, sweet potato, green beans",
                    "Evening: Sugar-free yogurt with sliced almonds"
                ]
            },
            gain_weight: {
                under_150: [
                    "Breakfast: 3 egg omelet with cheese, whole grain toast with avocado",
                    "Mid-morning: Protein smoothie with oats and peanut butter",
                    "Lunch: Grilled chicken sandwich, side salad with olive oil dressing",
                    "Afternoon snack: Greek yogurt with granola and honey",
                    "Dinner: Salmon, quinoa, roasted vegetables with olive oil",
                    "Evening: Cottage cheese with pineapple"
                ],
                '150_200': [
                    "Breakfast: Whole grain waffles with peanut butter, scrambled eggs",
                    "Mid-morning: Trail mix with dried fruits and nuts",
                    "Lunch: Chicken and avocado wrap, vegetable soup",
                    "Afternoon snack: Protein bar and banana",
                    "Dinner: Lean beef stir-fry with vegetables and brown rice",
                    "Evening: Greek yogurt with granola and berries"
                ],
                over_200: [
                    "Breakfast: Breakfast burrito with eggs, cheese, and avocado",
                    "Mid-morning: Protein smoothie with whole milk and oats",
                    "Lunch: Tuna pasta salad with olive oil dressing",
                    "Afternoon snack: Peanut butter and jelly sandwich",
                    "Dinner: Grilled steak, baked potato with sour cream, vegetables",
                    "Evening: Casein protein shake with almond butter"
                ]
            }
        }
    };

    return mealPlans[gender]?.[goal]?.[weightRange] || ["No specific meal plan available"];
}

function displayMeals(meals) {
    const container = document.getElementById('mealSuggestions');
    container.innerHTML = ''; // Clear previous suggestions

    meals.forEach(meal => {
        const mealElement = document.createElement('div');
        mealElement.className = 'meal-item'; // Ensure this matches your CSS
        mealElement.textContent = meal;
        container.appendChild(mealElement);
    });
}

function getWorkoutsByGoal(goal, gender) {
    const workouts = {
        male: {
            bulk: [
                {
                    name: "Heavy Compound Workout",
                    difficulty: "Advanced",
                    duration: "75 minutes",
                    target: "Muscle Growth",
                    exercises: [
                        { name: "Barbell Bench Press", sets: 5, reps: "5-8" },
                        { name: "Deadlifts", sets: 5, reps: "5-8" },
                        { name: "Military Press", sets: 4, reps: "6-10" },
                        { name: "Barbell Rows", sets: 4, reps: "8-12" },
                        { name: "Weighted Dips", sets: 3, reps: "8-12" }
                    ]
                }
            ],
            lose_weight: [
                {
                    name: "High-Intensity Circuit Training",
                    difficulty: "Intermediate",
                    duration: "45 minutes",
                    target: "Fat Loss",
                    exercises: [
                        { name: "Burpees", sets: 4, reps: "15" },
                        { name: "Mountain Climbers", sets: 4, reps: "30 seconds" },
                        { name: "Jump Rope", sets: 4, reps: "1 minute" },
                        { name: "Bodyweight Squats", sets: 4, reps: "20" },
                        { name: "Push-ups", sets: 4, reps: "15" }
                    ]
                }
            ],
            maintain_weight: [
                {
                    name: "Balanced Full Body Workout",
                    difficulty: "Intermediate",
                    duration: "60 minutes",
                    target: "Overall Fitness",
                    exercises: [
                        { name: "Barbell Squats", sets: 3, reps: "8-10" },
                        { name: "Push-ups", sets: 3, reps: "10-15" },
                        { name: "Dumbbell Rows", sets: 3, reps: "10-12 each arm" },
                        { name: "Plank", sets: 3, reps: "30-60 seconds" },
                        { name: "Lunges", sets: 3, reps: "12 each leg" },
                        { name: "Pull-ups", sets: 3, reps: "6-10" }
                    ]
                }
            ],
            gain_weight: [
                {
                    name: "Progressive Overload Training",
                    difficulty: "Advanced",
                    duration: "90 minutes",
                    target: "Strength and Mass",
                    exercises: [
                        { name: "Barbell Back Squats", sets: 5, reps: "5-8" },
                        { name: "Weighted Pull-ups", sets: 4, reps: "6-8" },
                        { name: "Barbell Bench Press", sets: 5, reps: "5-8" },
                        { name: "Romanian Deadlifts", sets: 4, reps: "8-10" },
                        { name: "Overhead Press", sets: 4, reps: "6-8" }
                    ]
                }
            ]
        },
        female: {
            bulk: [
                {
                    name: "Progressive Strength Training",
                    difficulty: "Intermediate",
                    duration: "65 minutes",
                    target: "Muscle Development",
                    exercises: [
                        { name: "Dumbbell Squats", sets: 4, reps: "8-12" },
                        { name: "Assisted Pull-ups", sets: 3, reps: "8-10" },
                        { name: "Dumbbell Bench Press", sets: 4, reps: "8-12" },
                        { name: "Hip Thrusts", sets: 4, reps: "12-15" },
                        { name: "Shoulder Press", sets: 3, reps: "10-12" }
                    ]
                }
            ],
            lose_weight: [
                {
                    name: "Fat-Burning Circuit",
                    difficulty: "Intermediate",
                    duration: "40 minutes",
                    target: "Fat Loss",
                    exercises: [
                        { name: "Jump Squats", sets: 3, reps: "15" },
                        { name: "Modified Burpees", sets: 3, reps: "10" },
                        { name: "Step-ups", sets: 3, reps: "12 each leg" },
                        { name: "Tricep Dips", sets: 3, reps: "12" },
                        { name: "Bicycle Crunches", sets: 3, reps: "30 seconds" }
                    ]
                }
            ],
            maintain_weight: [
                {
                    name: "Full Body Toning",
                    difficulty: "Intermediate",
                    duration: "50 minutes",
                    target: "Overall Fitness",
                    exercises: [
                        { name: "Walking Lunges", sets: 3, reps: "10 each leg" },
                        { name: "Modified Push-ups", sets: 3, reps: "10-12" },
                        { name: "Resistance Band Rows", sets: 3, reps: "12-15" },
                        { name: "Glute Bridges", sets: 3, reps: "15" },
                        { name: "Side Planks", sets: 3, reps: "30 seconds each side" }
                    ]
                }
            ],
            gain_weight: [
                {
                    name: "Strength Building Workout",
                    difficulty: "Intermediate",
                    duration: "70 minutes",
                    target: "Strength and Muscle",
                    exercises: [
                        { name: "Goblet Squats", sets: 4, reps: "10-12" },
                        { name: "Incline Dumbbell Press", sets: 4, reps: "8-10" },
                        { name: "Romanian Deadlifts", sets: 4, reps: "10-12" },
                        { name: "Assisted Pull-ups", sets: 3, reps: "8-10" },
                        { name: "Walking Lunges", sets: 3, reps: "12 each leg" }
                    ]
                }
            ]
        }
    };

    return workouts[gender]?.[goal] || ["No specific workout plan available"];
}
function displayWorkouts(goal, gender) {
    const workoutSuggestions = getWorkoutsByGoal(goal, gender);
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

    if (workoutSuggestions.length === 0) {
        workoutContainer.innerHTML = '<p>No specific workouts available for this goal and gender combination.</p>';
    }
}

