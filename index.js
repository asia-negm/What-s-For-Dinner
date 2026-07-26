const allRecipes = [
  {
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
    rating: 4.6,
    reviews: 289,
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Asian",
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach"
    ],
    instructions: [
      "Heat oil in a large pan and sauté the onion until soft.",
      "Add the garlic and curry powder, cook for 1 minute.",
      "Add the potatoes, cauliflower, and carrots. Stir well.",
      "Pour in the coconut milk and bring to a simmer.",
      "Cover and cook for 25 minutes until vegetables are tender.",
      "Stir in the chickpeas and spinach, cook for 5 more minutes.",
      "Season to taste and serve hot with rice."
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "45g",
      fat: "14g"
    },
    chefTips: [
      "Toast the curry powder for deeper flavor.",
      "Add a squeeze of lime before serving for brightness.",
      "Use full-fat coconut milk for a creamier sauce.",
      "Add protein like tofu or paneer if desired."
    ]
  },

  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh basil and mozzarella",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
    rating: 4.8,
    reviews: 412,
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "2 people",
    difficulty: "Medium",
    category: "Italian",
    ingredients: [
      "1 pizza dough",
      "200g tomato sauce",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "1 teaspoon salt",
      "1 pinch black pepper"
    ],
    instructions: [
      "Preheat your oven to 250°C (480°F).",
      "Roll out the pizza dough on a floured surface.",
      "Spread the tomato sauce evenly over the dough.",
      "Tear the mozzarella and place it on top.",
      "Drizzle with olive oil and season with salt.",
      "Bake for 10-12 minutes until the crust is golden.",
      "Top with fresh basil leaves and serve immediately."
    ],
    nutrition: {
      calories: "285 kcal",
      protein: "12g",
      carbs: "36g",
      fat: "11g"
    },
    chefTips: [
      "Use a pizza stone for a crispier base.",
      "Add basil after baking so it stays fresh and green.",
      "Let the dough rest at room temperature before rolling.",
      "Don't overload with toppings or the base stays soggy."
    ]
  },

  {
    name: "Grilled Salmon",
    description: "Tender salmon fillet with lemon and herbs",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    rating: 4.9,
    reviews: 356,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ingredients: [
      "2 salmon fillets",
      "1 lemon, sliced",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "Fresh dill",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper"
    ],
    instructions: [
      "Pat the salmon fillets dry with paper towels.",
      "Rub with olive oil, garlic, salt, and pepper.",
      "Heat a grill pan over medium-high heat.",
      "Place the salmon skin-side down and cook for 6 minutes.",
      "Flip carefully and cook for another 4-5 minutes.",
      "Add lemon slices and fresh dill on top.",
      "Rest for 2 minutes before serving."
    ],
    nutrition: {
      calories: "367 kcal",
      protein: "34g",
      carbs: "3g",
      fat: "24g"
    },
    chefTips: [
      "Don't move the salmon too early — let it sear.",
      "Cook skin-side down first for crispy skin.",
      "Salmon is done when it flakes easily with a fork.",
      "Squeeze fresh lemon right before serving."
    ]
  },

  {
    name: "Beef Tacos",
    description: "Spicy Mexican tacos with fresh toppings",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    rating: 4.7,
    reviews: 198,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Mexican",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tomatoes, diced",
      "1 cup shredded lettuce",
      "1 cup grated cheese",
      "2 tablespoons taco seasoning",
      "Sour cream to serve"
    ],
    instructions: [
      "Heat a pan and cook the ground beef until browned.",
      "Add the onion and taco seasoning, cook for 5 minutes.",
      "Warm the taco shells in the oven for 3 minutes.",
      "Fill each shell with the beef mixture.",
      "Top with lettuce, tomatoes, and cheese.",
      "Add a spoonful of sour cream.",
      "Serve immediately while warm."
    ],
    nutrition: {
      calories: "410 kcal",
      protein: "24g",
      carbs: "28g",
      fat: "22g"
    },
    chefTips: [
      "Drain excess fat from the beef for a lighter taco.",
      "Warm the shells so they don't crack when filling.",
      "Add hot sauce or jalapeños for extra heat.",
      "Prep all toppings before you start cooking."
    ]
  },

  {
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake for dessert lovers",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    rating: 4.9,
    reviews: 523,
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "8 people",
    difficulty: "Medium",
    category: "Dessert",
    ingredients: [
      "2 cups flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 teaspoons baking powder",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat the oven to 180°C (350°F) and grease a cake pan.",
      "Mix the flour, sugar, cocoa, and baking powder in a bowl.",
      "In another bowl, whisk the eggs, milk, oil, and vanilla.",
      "Combine the wet and dry ingredients until smooth.",
      "Pour the batter into the prepared pan.",
      "Bake for 30-35 minutes until a toothpick comes out clean.",
      "Let it cool before frosting and serving."
    ],
    nutrition: {
      calories: "445 kcal",
      protein: "6g",
      carbs: "62g",
      fat: "20g"
    },
    chefTips: [
      "Don't overmix the batter or the cake will be dense.",
      "Add a pinch of coffee to deepen the chocolate flavor.",
      "Check with a toothpick — it should have moist crumbs.",
      "Let it cool fully before adding frosting."
    ]
  }
];

var copy = allRecipes.slice(0);

function getNextRecipes(){
    if(copy.length < 1){
        copy=allRecipes.slice(0);
    }
    var  randomIndex  = Math.floor(Math.random() * copy.length);
    var item = copy[ randomIndex ];
    copy.splice( randomIndex , 1);
    return item ;
}


function showRecipe(){
    var meal = getNextRecipes()
    
//   var  randomIndex = Math.floor(Math.random() * allRecipes.length);
    document.getElementById('recipesList').innerHTML = `  <div class="container">
            <div class="row">
                <div class="col-4 recipe-image rounded-start position-relative left-side p-0">
                    <img id="image" class="rounded-4 " src="${meal.image}" alt="">
                    <div class="position-absolute bg-white rounded-pill shadow-lg reviews">
                        <div class="d-flex align-items-center p-2 ">
                            <i class="fa-solid fa-star color-yellow mx-1"></i>
                            <span id="rating" class=" mx-1 color-gary-900 fw-bold">${meal.rating}</span>
                            <span id="reviews" class=" mx-1 color-gary-500">(${meal.reviews} reviews)</span>

                        </div>

                    </div>
                    <div class="position-absolute bg-white rounded-4 p-3 time"> 
                        <div class="d-flex  justify-content-around align-items-center p-2 text-center">
                            <div>
                                <i class="fa-solid fa-clock color-orange-500 text-2xl "></i>
                                <p  class="color-gary-500 text-xs">Prep Time</p>
                                <p id="prepTime" class="color-gary-900 fw-bolder text-sm">${meal.prepTime}</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-fire-burner text-2xl color-red-500"></i>
                                <p class="color-gary-500 text-xs">Cook Time</p>
                                <p id="cookTime" class="color-gary-900 fw-bolder text-sm">${meal.cookTime}</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-users text-2xl color-blue-500"></i>
                                <p  class="color-gary-500 text-xs"> Servings</p>
                                <p id="servings" class="color-gary-900 fw-bolder text-sm">${meal.servings}</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-8 bg-white rounded-end p-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex justify-content-between align-items-start mb-1 mx-2 flex-column">
                            <div class="d-flex align-items-center mb-3">
                                <span id="difficulty" class="px-3 py-1 rounded-pill text-xs fw-bold color-green-500 bg-green mx-3">${meal.difficulty}</span>
                                <span id="category" class="px-3 py-1 rounded-pill text-xs fw-bold color-blue-500 bg-blue">${meal.category}</span>
    
                            </div>
                            <h3 id="demo" class="color-gary-900 fw-bolder mb-2 text-4xl">${meal.name}</h3>
                            <p id="description" class="color-gary-500 text-lg">${meal.description}</p>
                        </div>
                        <div class="d-flex align-self-end">
                            <button class="w-12 h-12 bg-orange-100 color-orange-600 p-3 rounded-3"><i class="fa-solid fa-bookmark"></i></button>
                            <button  class="w-12 h-12 bg-orange-100 color-orange-600 p-3 rounded-3 mx-2" ><i class="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                    <div class="bg-red-50 time-waring p-4 rounded-3">
                        <div class="d-flex align-items-center">
                        <i class="fa-solid fa-triangle-exclamation  mr-3 text-xl color-red-500 me-3"></i>
                        <div>
                            <p class="color-red-800 fw-bolder">Extended Preparation Time</p>
                            <p class="text-xs color-red-600">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                        </div>

                        </div>
                    </div>
                    <div class="">
                  <ul class="nav nav-underline mb-3 justify-content-evenly mt-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button" role="tab" aria-controls="pills-ingredients" aria-selected="true">
        <i class="fa-solid fa-list-check"></i>
        ingredients
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-instructions-tab" data-bs-toggle="pill" data-bs-target="#pills-instructions" type="button" role="tab" aria-controls="pills-instructions" aria-selected="false">
        <i class="fa-solid fa-book-open"></i>
        instructions
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-nutition-tab" data-bs-toggle="pill" data-bs-target="#pills-nutition" type="button" role="tab" aria-controls="pills-nutition" aria-selected="false">
        <i class="fa-solid fa-chart-pie"></i>
        nutition
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-chef-tab" data-bs-toggle="pill" data-bs-target="#pills-chef" type="button" role="tab" aria-controls="pills-chef" aria-selected="false">
        <i class="fa-solid fa-lightbulb"></i>
        chef's tips
    </button>
  </li>
 
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-ingredients" role="tabpanel" aria-labelledby="pills-ingredients-tab" tabindex="0">
  <div class="bg-orange-50 rounded-3 p-1 overflow-list">
    <ul class="my-4">
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">1</span>
            <span class="color-gary-700">${meal.ingredients[0]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">2</span>
            <span class="color-gary-700">${meal.ingredients[1]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">3</span>
            <span class="color-gary-700">${meal.ingredients[2]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">4</span>
            <span class="color-gary-700">${meal.ingredients[3]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">5</span>
            <span class="color-gary-700">${meal.ingredients[4]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">6</span>
            <span class="color-gary-700">${meal.ingredients[5]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">7</span>
            <span class="color-gary-700">${meal.ingredients[6]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">8</span>
            <span class="color-gary-700">${meal.ingredients[7]}</span>
        </li>
        <li class="list-numbers">
            <span class=" bg-orange-500 numbers  rounded-circle  text-xs p-1 fw-bolder color-white">9</span>
            <span class="color-gary-700">${meal.ingredients[8]}</span>
        </li>
    </ul>

  </div>
  </div>
  <div class="tab-pane fade overflow-list" id="pills-instructions" role="tabpanel" aria-labelledby="pills-instructions-tab" tabindex="0">
      <div class="d-flex align-items-center">
          <div class="bg-orange-500 w-12 h-12 color-white d-flex align-items-center justify-content-center rounded-4 fw-bolder text-xl m-3">1</div>
          <span class="color-gary-700">${meal.instructions[0]}</span>
          
        </div>
        <div class="d-flex align-items-center">
          <div class="bg-orange-500 w-12 h-12 color-white d-flex align-items-center justify-content-center rounded-4 fw-bolder text-xl m-3">2</div>
          <span class="color-gary-700">${meal.instructions[1]}</span>
      
        </div>
  <div class="d-flex align-items-center">
    <div class="bg-orange-500 w-12 h-12 color-white d-flex align-items-center justify-content-center rounded-4 fw-bolder text-xl m-3">3</div>
    <span class="color-gary-700">${meal.instructions[2]}</span>

  </div>
  <div class="d-flex align-items-center">
    <div class="bg-orange-500 w-12 h-12 color-white d-flex align-items-center justify-content-center rounded-4 fw-bolder text-xl m-3">4</div>
    <span class="color-gary-700">${meal.instructions[3]}</span>

  </div>
  <div class="d-flex align-items-center">
    <div class="bg-orange-500 w-12 h-12 color-white d-flex align-items-center justify-content-center rounded-4 fw-bolder text-xl m-3">5</div>
    <span class="color-gary-700">${meal.instructions[4]}</span>

  </div>
  <div class="d-flex align-items-center">
    <div class="bg-orange-500 w-12 h-12 color-white d-flex align-items-center justify-content-center rounded-4 fw-bolder text-xl m-3">6</div>
    <span class="color-gary-700">${meal.instructions[5]}</span>

  </div>



  </div>
  <div class="tab-pane fade" id="pills-nutition" role="tabpanel" aria-labelledby="pills-nutition-tab" tabindex="0">
    <div class="numtition-list">
        <div class="container">
            <div class="row">
                <div class="col-6 mb-3">
                    <div class="d-flex justify-content-between align-items-center bg-gray-50 rounded-1 p-3">
                        <div class="d-flex align-items-center">
                            <div class="w-10 h-10 bg-orange-100 rounded-2 p-1 icon-nuition d-flex justify-content-center align-items-center">
                                <i class="fa-solid fa-fire color-orange-600"></i>
                            </div>
                            <span class="color-gary-700 fw-bold text-lg">Calories</span>
                        </div>
                        <span class="fw-bolder text-xl color-gary-900">${meal.nutrition.calories}</span>
                    </div>
                </div>
                <div class="col-6  mb-3">
                         <div class="d-flex justify-content-between align-items-center bg-gray-50 rounded-1 p-3">
            <div class="d-flex align-items-center ">
                <div class="w-10 h-10 bg-blue-100 rounded-2 p-1 icon-nuition d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-dumbbell color-blue-600"></i>
                </div>
                <span class="color-gary-700 fw-bold text-lg">Protein</span>
            </div>
            <span class="fw-bolder text-xl color-gary-900">${meal.nutrition.protein}</span>
        </div>
                </div>
                <div class="col-6  mb-3">
  <div class="d-flex justify-content-between align-items-center bg-gray-50 rounded-1 p-3">
            <div class="d-flex align-items-center ">
                <div class="w-10 h-10 bg-yellow-100 rounded-2 p-1 icon-nuition d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-wheat-awn color-yellow-600"></i>
                </div>
                <span class="color-gary-700 fw-bold text-lg">Carbohydrates</span>
            </div>
            <span class="fw-bolder text-xl color-gary-900">${meal.nutrition.carbs}</span>
        </div>
                </div>
                <div class="col-6  mb-3">
 <div class="d-flex justify-content-between align-items-center bg-gray-50 rounded-1 p-3">
            <div class="d-flex align-items-center ">
                <div class="w-10 h-10 bg-red-100 rounded-2 p-1 icon-nuition d-flex justify-content-center align-items-center">
                   <i class="fa-solid fa-droplet color-red-600"></i>
                </div>
                <span class="color-gary-700 fw-bold text-lg">Fat</span>
            </div>
            <span class="fw-bolder text-xl color-gary-900">${meal.nutrition.fat}</span>
        </div>
                </div>
                <div class="col-6  mb-3">
 <div class="d-flex justify-content-between align-items-center bg-gray-50 rounded-1 p-3">
            <div class="d-flex align-items-center ">
                <div class="w-10 h-10 bg-green rounded-2 p-1 icon-nuition d-flex justify-content-center align-items-center">
                   <i class="fa-solid fa-seedling color-green-500"></i>
                </div>
                <span class="color-gary-700 sw-bold text-lg">Fiber</span>
            </div>
            <span class="fw-bolder text-xl color-gary-900">${meal.nutrition.fiber}</span>
        </div>
                </div>
                <div class="col-6  mb-3">
                    <div class="d-flex justify-content-between align-items-center bg-gray-50 rounded-1 p-3">
            <div class="d-flex align-items-center ">
                <div class="w-10 h-10 bg-pink-100 rounded-2 p-1 icon-nuition d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-cube color-pink-600"></i>
                </div>
                <span class="color-gary-700 sw-bold text-lg">Sodium</span>
            </div>
            <span class="fw-bolder text-xl color-gary-900">${meal.nutrition.sodium}</span>
        </div>
                </div>
            </div>
        </div>
   
      
       
       
        
    </div>
  </div>
  <div class="tab-pane fade" id="pills-chef" role="tabpanel" aria-labelledby="pills-chef-tab" tabindex="0">
   <div>
    <div class="d-flex align-items-center p-3 bg-amber-50 rounded-4 chef-list">
        <i class="fa-solid fa-circle-check color-amber-600 chef-icon"></i>
        <p class="color-gary-700">${meal.chefTips[0]}</p>
    </div>
    <div class="d-flex align-items-center p-3 bg-amber-50 rounded-4 chef-list">
        <i class="fa-solid fa-circle-check color-amber-600 chef-icon"></i>
        <p class="color-gary-700">${meal.chefTips[1]}</p>
    </div>
    <div class="d-flex align-items-center p-3 bg-amber-50 rounded-4 chef-list">
        <i class="fa-solid fa-circle-check color-amber-600 chef-icon"></i>
        <p class="color-gary-700">${meal.chefTips[2]}</p>
    </div>
    <div class="d-flex align-items-center p-3 bg-amber-50 rounded-4 chef-list">
        <i class="fa-solid fa-circle-check color-amber-600 chef-icon"></i>
        <p class="color-gary-700">Add protein like tofu or paneer if desired</p>
    </div>
   </div>



  </div>
</div>
                    </div>
                    <div class="d-flex align-items-center rounded-3 mt-4 fw-bolder button-recipe">
                        <button class="bg-orange-500 color-white p-2 mt-3 rounded-3" onclick="showRecipe()">
                            <i class="fa-solid fa-arrows-rotate"></i>
                           Try Another Recipe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
} 
showRecipe();