// JavaScript to handle meal planning based on user selection

const mealPlans = {
    bulk: [
        { name: "Chicken & Quinoa Bowl", img: "chicken-quinoa.jpg" },
        { name: "Protein Shake with Peanut Butter", img: "protein-shake.jpg" },
        { name: "Steak with Sweet Potatoes", img: "steak-potatoes.jpg" }
    ],
    diet: [
        { name: "Grilled Salmon with Steamed Vegetables", img: "salmon-veg.jpg" },
        { name: "Vegetable Stir-fry with Tofu", img: "veggie-stirfry.jpg" },
        { name: "Chicken Salad with Avocado", img: "chicken-salad.jpg" }
    ],
    lose_weight: [
        { name: "Zucchini Noodles with Marinara Sauce", img: "zucchini-noodles.jpg" },
        { name: "Grilled Chicken with Broccoli", img: "chicken-broccoli.jpg" },
        { name: "Baked Tilapia with Asparagus", img: "tilapia-asparagus.jpg" }
    ],
    gain_weight: [
        { name: "Pasta with Ground Beef and Vegetables", img: "pasta-beef.jpg" },
        { name: "Peanut Butter Banana Smoothie", img: "smoothie-banana.jpg" },
        { name: "Chicken with Brown Rice and Veggies", img: "chicken-rice.jpg" }
    ],
    maintain: [
        { name: "Roasted Chicken with Mixed Greens", img: "roasted-chicken.jpg" },
        { name: "Turkey Wrap with Vegetables", img: "turkey-wrap.jpg" },
        { name: "Scrambled Eggs with Whole Wheat Toast", img: "eggs-toast.jpg" }
    ]
};

// Handle form submission to get meal plan based on user goal
document.getElementById('mealPlanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const goal = document.getElementById('goal').value;
    const weight = document.getElementById('weight').value;  // Get the user's weight

    const suggestions = mealPlans[goal] || [];
    const mealSuggestionsDiv = document.getElementById('mealSuggestions');
    
    // Clear previous suggestions
    mealSuggestionsDiv.innerHTML = `<p>Your weight: ${weight} kg</p>`;  // Display weight

    // Display the suggested meals
    suggestions.forEach(meal => {
        const mealItem = document.createElement('div');
        mealItem.innerHTML = `<img src="${meal.img}" alt="${meal.name}" width="100">
                              <p>${meal.name}</p>`;
        mealSuggestionsDiv.appendChild(mealItem);
    });
});
