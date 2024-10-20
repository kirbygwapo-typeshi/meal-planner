const mealPlans = {
    "20-25kg": {
        bulk: [
            { name: "Chicken & Quinoa Bowl", img: "chicken-quinoa.jpg", calories: 400 },
            { name: "Oatmeal with Almonds", img: "oatmeal.jpg", calories: 350 },
            { name: "Turkey Sandwich", img: "turkey-sandwich.jpg", calories: 450 }
        ],
        diet: [
            { name: "Grilled Fish with Salad", img: "grilled-fish.jpg", calories: 300 },
            { name: "Veggie Wrap", img: "veggie-wrap.jpg", calories: 250 },
            { name: "Fruit Smoothie", img: "fruit-smoothie.jpg", calories: 200 }
        ],
        lose_weight: [
            { name: "Zucchini Noodles", img: "zucchini-noodles.jpg", calories: 200 },
            { name: "Grilled Chicken Salad", img: "chicken-salad.jpg", calories: 250 },
            { name: "Vegetable Stir-fry", img: "veggie-stirfry.jpg", calories: 300 }
        ],
        gain_weight: [
            { name: "Pasta with Meatballs", img: "pasta-meatballs.jpg", calories: 600 },
            { name: "Peanut Butter Toast", img: "peanut-butter-toast.jpg", calories: 300 },
            { name: "Fruit & Nut Energy Bars", img: "energy-bars.jpg", calories: 350 }
        ],
        maintain: [
            { name: "Chicken Wrap", img: "chicken-wrap.jpg", calories: 400 },
            { name: "Greek Yogurt with Honey", img: "yogurt-honey.jpg", calories: 250 },
            { name: "Rice with Vegetables", img: "rice-veg.jpg", calories: 350 }
        ]
    },
    "30-35kg": {
        bulk: [
            { name: "Beef Tacos", img: "beef-tacos.jpg", calories: 500 },
            { name: "Banana Protein Shake", img: "protein-shake.jpg", calories: 450 },
            { name: "Stir-fried Chicken with Rice", img: "chicken-rice.jpg", calories: 650 }
        ],
        diet: [
            { name: "Quinoa Salad", img: "quinoa-salad.jpg", calories: 350 },
            { name: "Steamed Broccoli with Lemon", img: "broccoli.jpg", calories: 150 },
            { name: "Cottage Cheese with Pineapple", img: "cottage-cheese.jpg", calories: 250 }
        ],
        lose_weight: [
            { name: "Lentil Soup", img: "lentil-soup.jpg", calories: 300 },
            { name: "Shrimp Salad", img: "shrimp-salad.jpg", calories: 350 },
            { name: "Vegetable Smoothie", img: "veg-smoothie.jpg", calories: 200 }
        ],
        gain_weight: [
            { name: "Almond Butter Banana Toast", img: "banana-toast.jpg", calories: 400 },
            { name: "Cheese Quesadilla", img: "quesadilla.jpg", calories: 500 },
            { name: "Chickpea Pasta", img: "chickpea-pasta.jpg", calories: 550 }
        ],
        maintain: [
            { name: "Baked Chicken with Veggies", img: "baked-chicken.jpg", calories: 400 },
            { name: "Egg Salad Sandwich", img: "egg-salad.jpg", calories: 350 },
            { name: "Oven-Baked Sweet Potatoes", img: "sweet-potatoes.jpg", calories: 300 }
        ]
    },
    "40-45kg": {
        bulk: [
            { name: "Stuffed Peppers", img: "stuffed-peppers.jpg", calories: 600 },
            { name: "Granola Bars", img: "granola-bars.jpg", calories: 400 },
            { name: "Salmon with Quinoa", img: "salmon-quinoa.jpg", calories: 700 }
        ],
        diet: [
            { name: "Mixed Bean Salad", img: "bean-salad.jpg", calories: 350 },
            { name: "Cauliflower Rice Bowl", img: "cauliflower-rice.jpg", calories: 200 },
            { name: "Turkey Lettuce Wraps", img: "turkey-lettuce.jpg", calories: 250 }
        ],
        lose_weight: [
            { name: "Chickpea Salad", img: "chickpea-salad.jpg", calories: 300 },
            { name: "Cucumber Tomato Salad", img: "cucumber-salad.jpg", calories: 150 },
            { name: "Roasted Veggies", img: "roasted-veggies.jpg", calories: 250 }
        ],
        gain_weight: [
            { name: "Meatloaf with Mashed Potatoes", img: "meatloaf.jpg", calories: 800 },
            { name: "Tuna Salad Sandwich", img: "tuna-salad.jpg", calories: 450 },
            { name: "Pasta with Cream Sauce", img: "pasta-cream.jpg", calories: 700 }
        ],
        maintain: [
            { name: "Chicken Stir-fry", img: "chicken-stirfry.jpg", calories: 400 },
            { name: "Quiche with Spinach", img: "quiche.jpg", calories: 350 },
            { name: "Vegetable Sushi Rolls", img: "sushi-rolls.jpg", calories: 300 }
        ]
    },
    "60-65kg": {
        bulk: [
            { name: "Fried Rice with Egg", img: "fried-rice.jpg", calories: 700 },
            { name: "Beef and Broccoli", img: "beef-broccoli.jpg", calories: 600 },
            { name: "Lamb Chops with Couscous", img: "lamb-couscous.jpg", calories: 800 }
        ],
        diet: [
            { name: "Sliced Apple with Almonds", img: "apple-almonds.jpg", calories: 200 },
            { name: "Baked Cod with Asparagus", img: "cod-asparagus.jpg", calories: 350 },
            { name: "Spinach Salad with Feta", img: "spinach-feta.jpg", calories: 300 }
        ],
        lose_weight: [
            { name: "Vegetable Omelette", img: "vegetable-omelette.jpg", calories: 300 },
            { name: "Grilled Shrimp Skewers", img: "shrimp-skewers.jpg", calories: 250 },
            { name: "Roasted Brussels Sprouts", img: "brussels-sprouts.jpg", calories: 200 }
        ],
        gain_weight: [
            { name: "Pork Chops with Applesauce", img: "pork-chops.jpg", calories: 700 },
            { name: "Bacon and Eggs", img: "bacon-eggs.jpg", calories: 600 },
            { name: "Shrimp Alfredo Pasta", img: "shrimp-alfredo.jpg", calories: 800 }
        ],
        maintain: [
            { name: "Quinoa Bowl with Grilled Chicken", img: "quinoa-chicken.jpg", calories: 450 },
            { name: "Chicken Caesar Salad", img: "caesar-salad.jpg", calories: 400 },
            { name: "Stuffed Zucchini", img: "stuffed-zucchini.jpg", calories: 350 }
        ]
    },
    "70-100kg+": {
        bulk: [
            { name: "BBQ Ribs with Cornbread", img: "bbq-ribs.jpg", calories: 900 },
            { name: "Double Cheeseburger", img: "double-cheeseburger.jpg", calories: 800 },
            { name: "Chicken Alfredo Pasta", img: "chicken-alfredo.jpg", calories: 750 }
        ],
        diet: [
            { name: "Greek Yogurt with Berries", img: "yogurt-berries.jpg", calories: 300 },
            { name: "Lentil Salad", img: "lentil-salad.jpg", calories: 350 },
            { name: "Baked Salmon with Green Beans", img: "salmon-greenbeans.jpg", calories: 400 }
        ],
        lose_weight: [
            { name: "Cauliflower Pizza", img: "cauliflower-pizza.jpg", calories: 300 },
            { name: "Spinach and Feta Stuffed Chicken", img: "stuffed-chicken.jpg", calories: 400 },
            { name: "Minestrone Soup", img: "minestrone-soup.jpg", calories: 250 }
        ],
        gain_weight: [
            { name: "Pasta Carbonara", img: "pasta-carbonara.jpg", calories: 800 },
            { name: "Sausage and Peppers", img: "sausage-peppers.jpg", calories: 750 },
            { name: "Steak and Potatoes", img: "steak-potatoes.jpg", calories: 900 }
        ],
        maintain: [
            { name: "Turkey Chili", img: "turkey-chili.jpg", calories: 400 },
            { name: "Shrimp Tacos", img: "shrimp-tacos.jpg", calories: 500 },
            { name: "Vegetable Stir-Fry with Tofu", img: "tofu-stirfry.jpg", calories: 350 }
        ]
    }
};

document.getElementById('mealPlanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server
    const goal = document.getElementById('goal').value;
    const weightRange = document.getElementById('weightRange').value; 

    const suggestions = mealPlans[weightRange] && mealPlans[weightRange][goal] ? mealPlans[weightRange][goal] : [];
    const mealSuggestionsDiv = document.getElementById('mealSuggestions');
    
    mealSuggestionsDiv.innerHTML = ''; // Clear previous suggestions

    if (suggestions.length === 0) {
        mealSuggestionsDiv.innerHTML = '<p>No meal plans available for this combination.</p>';
        return;
    }

    suggestions.forEach(meal => {
        const mealItem = document.createElement('div');
        mealItem.innerHTML = `
            <div>
                <img src="${meal.img}" alt="${meal.name}" style="width: 100px; height: 100px;">
                <p>${meal.name} - <strong>${meal.calories} calories</strong></p>
            </div>
        `;
        mealSuggestionsDiv.appendChild(mealItem);
    });
});
