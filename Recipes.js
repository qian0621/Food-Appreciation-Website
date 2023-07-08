class Dish {
  constructor(query, imgscr, name, info, servings, ingredients, steps) {
    this.query = query;
    this.imgscr = imgscr;
    this.name = name;
    this.info = info;
    this.servings = servings;
    this.ingredients = ingredients;
    this.steps = steps;
  }
  recipedisplay(){
    var ingredient;
    var step;
    document.getElementById("headerimg").src = selectedish.imgscr;
    document.getElementById("dishname").innerHTML = selectedish.name;
    document.getElementById("dishinfo").innerHTML = selectedish.info;
    document.getElementById("servings").innerHTML = selectedish.servings;
    for (let i in selectedish.ingredients) {
      ingredient = document.createElement("li");
      ingredient.innerText = selectedish.ingredients[i];
      document.getElementById("ingredients").appendChild(ingredient);
    }
    for (let i in selectedish.steps) {
      step = document.createElement("li");
      step.innerText = selectedish.steps[i];
      document.getElementById("steps").appendChild(step);
    }
  }
}
const dishes = [new Dish("?BikaAmbonHoneycombCake", "img/food/Bika Ambon (Honeycomb Cake).jpeg", "Bika Ambon (Honeycomb Cake)",
"Bika Ambon comes from Medan, Indonesia and it’s light with a smoky, caramelized sweetness. Made with tapioca flour, eggs, spices, and thick coconut milk, this chewy and light cake is leavened, and tastes of caramel and rich coconut milk.The yeast creates honeycomb-like holes in the cake that makes this cake light and airy, despite the richness of the coconut milk.",
"Serves: 2-4",
["150 g sugar", "3 eggs", "30 g margarine, melted", "3 g salt", "150 ml thick coconut milk", "150 ml water", "1 stick lemongrass", "4 kaffir lime leaves", "1 tsp turmeric powder"],
["Add yeast and warm water into a bowl and stir until the yeast dissolves.",
"Cover using plastic wrap and let stand for 15 minutes until the yeast expands to twice the volume or foams.",
"Using a medium sized saucepan, cook the coconut milk with water, sugar salt, turmeric powder, lemongrass and kaffir lime leaves until it comes to a boil.",
"Once it boils, take it off the heat. Let it cool to room temperature, and strain it.",
"Prepare a medium sized bowl. Add in the flour, and tapioca flour. Slowly pour the cooled coconut milk while stirring until there are no lumps of flour.",
"Add the eggs and margarine, stir until evenly distributed.",
"Then add the yeast, and stir again until evenly distributed. Cover using plastic wrapping, and let stand for 30 minutes until the dough rises.",
"Prepare a Bika Ambon mold with the capacity of 75 grams. Then heat it until it's really hot. Once it is well heated, reduce the heat.",
"Pour about 75 ml of the Bika Ambon batter. Cook the Bika Ambon until the sides are golden brown and cooked. Then remove and set aside.",
"Prepare a serving plate, then arrange the Bika Ambon on the plate and serve."]),

new Dish("?PanFriedDumplings", "img/food/pan_fried_dumplings.jpg", "Pan Fried Dumplings",
"Affectionately known as Potstickers in the West and Guo Tie in the East, the pan fried dumpling is a crispy and juicy package that bursts with flavour, thanks to the fillings of pork, prawns, ginger and seasoning. The trick is to fry the dumpling till it is golden, then steam it quickly with the right amount of water. Eat it hot with some ginger-soaked sauce made of soy sauce, black vinegar and sesame oil.",
"20 Dumplings",
["20 dumpling wrappers (round)", "240 g ground pork", "5 prawns (shelled and finely chopped)", "40 g chives (cut into thick strips)", "20 g ginger (minced)", "1½ sesame oil", "1 tsp spring onion (finely chopped)", "1 tsp Shaoxing wine", "½ tsp ground white pepper", "½ tsp salt", "30 ml water", "3 tbsp oil", "dipping sauce: 3 tbsp soy sauce", "1 tbsp black vinegar", "½ tsp sesame oil", "10 g ginger (julienned)"],
["In a bowl, combine ground pork, prawns, chives, spring onion, minced ginger, sesame oil, Shaoxing wine, white pepper and salt together until well mixed.",
"Take a wrapper and place a tablespoon of filling onto the centre.",
"Moisten the edges of the wrapper with water. Fold the dumpling into a half-moon shape. Crimp the edges and pinch it together to seal it tightly.",
"Place dumplings on a plate lined with parchment paper.",
"In a pan on medium heat, heat 2 tbsp oil and fry dumplings for 2 –3 minutes, until the bottom turns light brown.",
"To the same pan, increase to high heat and add 30ml water.  Cover the pan to steam for 3 –5 minutes until water has completely evaporated.",
"In a sauce dish, add 3 tbsp soy sauce, 1 tbsp black vinegar, ½ tsp sesame oil and 10 g julienned ginger.",
"Transfer the pan fried dumplings to a serving plate and serve with the dipping sauce. "]),

new Dish("?AyamGorengCabeIjoFriedChickenwithGreenChili", "img/food/Ayam Goreng Cabe Ijo (Fried Chicken with Green Chili).jpeg", "Ayam Goreng Cabe Ijo",
"Ayam Goreng Cabe Ijo is a typical Indonesian dish from Padang, Sumatra. It combines juicy fried chicken with a spicy sauce made from green chilies to create a lovely dish which is bound to tantalize your taste buds. Enjoy it with warm rice and other side dishes for a complete meal.",
"Serves 2-4",
["1 Chicken, about 1 kg", "30g Turmeric", "25g Shallots", "25g Garlic", "30g Ginger", "10g Coriander", "30g Galangal, smashed", "1 stick Lemongrass, smashed", "1 liter Water", "11g Salt", "20g Sugar", "15g Chicken Powder", "2 Bay Leaves", "2 sheet Lime Leaves", "600ml Cooking Oil, for frying", "45g Curly Green Chili", "119g Large Green Chili", "20g Garlic", "40g Shallots", "10g Chicken Powder", "2g Salt", "10g Sugar", "3g Shrimp Paste", "3 Sheet Lime Leaves", "2 Bay Leaves", "30g Galangal, smashed", "30g Ginger, smashed", "100ml Cooking Oil, for sauteing"],
["Cut the chicken into 8 pieces.",
"In a blender, add turmeric, shallots, garlic, ginger, coriander and blend well.",
"In a pot with water, add blended paste, salt, sugar, chicken powder, bay leaves, lemongrass, galangal, lime leaves and bring it to a boil.",
"Once it comes to a boil, add in the chicken and simmer for about 30 minutes over low heat.",
"Once the chicken is cooked, fry the chicken in hot oil over medium heat until golden brown and set aside.",
"To make the green chili sauce, blend curly green chilies, big green chilies, garlic, shallots and shrimp paste.",
"Sauté the chili paste over medium heat with galangal and ginger until fragrant with oils released. Stir well.",
"Add chicken powder, salt, sugar and stir well.",
"After the chili is cooked, add in the fried chicken and stir well till the sauce is absorbed.",
"Remove and serve."])]; //list of objs
var dishquery = location.search;
var selectedish;
for (let i in dishes) {
  if (dishes[i].query == dishquery) {
    selectedish = dishes[i];
  }
}
selectedish.recipedisplay()
