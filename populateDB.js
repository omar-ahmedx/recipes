const userArgs = process.argv.slice(2);
const async = require("async");
const Recipes = require("./models/recipe");

const mongoose = require("mongoose");
const mongoDb = userArgs[0];
mongoose.connect(mongoDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, " MongoDB connection error"));

const recipes = [];

function recipesCreate(
  recipe_name,
  recipe_description,
  imgs,
  ingredients,
  method,
  cb
) {
  recipeDetails = {
    recipe_name,
    recipe_description,
    imgs,
    ingredients,
    method,
  };
  const recipe = new Recipes(recipeDetails);
  recipe.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Recipe: ", recipe);
    recipes.push(recipe);
    cb(null, recipe);
  });
}

function createRecipes(cb) {
  async.parallel([
    function (callback) {
      recipesCreate(
        "Mediterranean Chickpea Salad",
        "This healthy summer salad is easy to make and celebrates all the fresh vegetable and herbs of summer. Chickpeas add protein and a tangy vinaigrette brings it all together.",
        [
          "/images/recipes/chickpea/container.webp",
          "/images/recipes/chickpea/main.webp",
          "/images/recipes/chickpea/method1.webp",
          "/images/recipes/chickpea/method2.webp",
          "/images/recipes/chickpea/method3.webp",
          "/images/recipes/chickpea/method4.webp",
        ],
        [
          "For the vinaigrette",
          "2 tablespoons olive oil ",
          "2 tablespoons red wine vinegar ",
          "1 teaspoon dried oregano ",
          "1/2 teaspoon kosher salt, plus more as needed ",
          "1/4 teaspoon freshly ground black pepper, plus more as needed ",
          "For the salad",
          "2 (15-ounce) cans chickpeas, drained and rinsed ",
          "1 (12-ounce) jar quartered and marinated artichoke hearts, drained ",
          "1 pint cherry or grape tomatoes, halved ",
          "2 Persian cucumbers, halved lengthwise and thinly sliced ",
          "2/3 cup pitted Kalamata olives, halved",
          "4 scallions, white and green parts, thinly sliced (about 1/2 cup) ",
          "2 tablespoons fresh mint leaves, chopped ",
          "6 ounces feta cheese, crumbled (about 1 1/2 cups) ",
        ],
        [
          "Make the oregano vinaigrette: ",
          "In a large bowl, whisk together the olive oil, red wine vinegar, dried oregano, kosher salt, and freshly ground black pepper. ",
          "Add salad ingredients to vinaigrette: ",
          "Add the chickpeas, artichoke hearts, tomatoes, cucumbers, olives, scallions, and mint to the bowl. Toss well to combine and coat in the vinaigrette. Add the feta cheese and toss gently to combine. Taste and season with additional salt and pepper as needed. ",
          "Serve: ",
          "Serve immediately or cover and refrigerate. You can keep this salad in the fridge covered, for 5 days. Enjoy cold or at room temperature. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Roasted Eggplant and Tomato Soup",
        "Roasted eggplant and tomato soup recipe made with oven roasted tomatoes, carrots, garlic, chickpeas, and eggplant",
        [
          "/images/recipes/roasted/container.webp",
          "/images/recipes/roasted/main.webp",
          "/images/recipes/roasted/method1.webp",
          "/images/recipes/roasted/method2.webp",
          "/images/recipes/roasted/method3.webp",
        ],
        [
          "12 plum tomatoes (about 3 lbs), cored, and cut in half lengthwise",
          "2 large carrots, cut into 3/4-inch pieces ",
          "10 garlic cloves, peeled  ",
          "4 tablespoons extra virgin olive oil  ",
          "Kosher salt and ground black pepper ",
          "1 large eggplant (about 1 1/2 lbs), cut into 3/4-inch chunks ",
          "1 can (15.5 oz) garbanzo beans, drained and rinsed ",
          "2 teaspoons curry powder ",
          "1/2 cup chopped fresh cilantro, for serving ",
        ],
        [
          "Prepare baking sheet with the tomatoes, carrots, and garlic: ",
          "Preheat oven to 425°F (220°C). Place racks on the top third and bottom third of oven. Place the tomatoes, carrots, and garlic in a large bowl and sprinkle with 2 Tbsp of olive oil, 1 teaspoon of salt, and 1/4 teaspoon black pepper. Toss to coat the vegetables evenly. \n Spread them out in an even layer in a rimmed baking sheet, with the tomatoes cut side down on the baking sheet. ",
          "Prepare baking sheet with the eggplant and garbanzo beans: ",
          "Place the chopped eggplant and garbanzo beans in the same bowl and sprinkle with the remaining 2 Tbsp of olive oil, the curry powder, a teaspoon of salt, and 1/4 teaspoon of black pepper. Toss to coat the eggplant pieces and garbanzo beans well.  \n Spread them out in a single layer on a second rimmed baking sheet. ",
          "Roast the vegetables: ",
          "Place the baking sheet with the tomatoes and carrots on the top rack and the eggplant and garbanzo beans on the lower rack in the oven. \n Roast at 425°F (220°C) until cooked through and lightly browned, about 45 minutes. About halfway through the cooking turn the vegetables over so they brown on the other side. ",
          "Remove skins from tomatoes, process tomatoes, carrots, garlic in a blender: ",
          "Remove the vegetables from the oven when done. Use tongs or a fork to peel off the tomatoes skins (they should come off easily) and discard. Place the roasted tomatoes, carrots, garlic, and all of the juices from the roasting pan in a blender or food processor and blend until smooth. ",
          "Stir in roasted eggplant and garbanzo beans, add water: ",
          "Pour the tomato carrot purée into a large pot. Stir in the roasted eggplant and garbanzo bean mixture. Add 3 to 4 cups of water to thin. Heat to a simmer on medium. \n  Season with salt and pepper. Sprinkle with fresh cilantro to serve. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Stuffed Squash with Turkey and Apples",
        "Looking for a delicious and filling dinner for two? Then try this stuffed squash recipe loaded with ground turkey, wild rice, apples, and herbs.",
        [
          "/images/recipes/acron/container.webp",
          "/images/recipes/acron/main.webp",
          "/images/recipes/acron/method1.webp",
          "/images/recipes/acron/method2.webp",
        ],
        [
          "1 medium (about 1 1/4 to 1 1/2 pound) acorn squash, halved lengthwise and seeded ",
          "2 tablespoons plus 1 teaspoon olive oil ",
          "1 teaspoon salt, divided ",
          "1/8 teaspoon ground black pepper ",
          "1/2 cup uncooked wild rice ",
          "6 ounces ground turkey or ground breakfast sausage ",
          "1 small shallot, finely chopped ",
          "1 stalk celery, finely chopped ",
          "1/2 large apple (Honeycrisp, Jonagold, or Braeburn), unpeeled, cored, and cut into small dice ",
          "1 tablespoon chopped fresh sage leaves ",
          "1 tablespoon chopped fresh rosemary ",
          "2 tablespoons dried cranberries ",
          "1 tablespoon fine, dry breadcrumbs",
        ],
        [
          "Preheat the oven: ",
          "Preheat the oven to 425oF. Line a baking sheet with parchment. ",
          "Roast the squash: ",
          "Brush the squash with 1 tablespoon of the oil and sprinkle with 1/4 teaspoon salt and a pinch of pepper. With the cut sides down, place the squash on the baking sheet. Bake for 35 to 40 minutes, or until tender when pierced with the tip of a paring knife. Remove and cool briefly. ",
          "While the squash roasts, cook the rice: ",
          "In a small saucepan, bring 2 cups water and 1/4 teaspoon salt to a boil. Add the rice and adjust the heat to a simmer. Set a lid on top, slightly askew, and cook for 40 to 45 minutes, or until the rice “grains” are tender (some grains may begin to separate or burst). Drain in a sieve or fine-mesh colander. ",
          "Cook the turkey and vegetables: ",
          "In a medium skillet over medium-high heat, add 1 tablespoon of the oil. Add the turkey and break it up into tablespoon-sized clumps using a stiff spatula or wooden spoon. Cook for 5 to 7 minutes, stirring often to further break up the meat, until it begins to brown. \n Add the shallot, celery, apple, sage, rosemary, cranberries, 1/2 teaspoon salt, and a pinch of pepper. Cook and stir for another 3 to 4 minutes, or until the vegetables soften.  \n If the pan seems dry, add up to 1/4 cup water, 1 tablespoon at a time, and stir to scrape up any brown bits on the bottom of the skillet until the water evaporates. Stir in the cooked rice. Taste and add more salt and pepper, if you like. ",
          "Stuff the squash: ",
          "Turn the squash on the baking sheet so the cut side is up. Divide the filling between the halves. ",
          "Bake the squash: ",
          "In a small bowl, mix the breadcrumbs with 1 teaspoon of oil. Sprinkle on top of the squash halves. \n Bake for 10 minutes, or until hot all the way through and the breadcrumbs are browned. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Spring Succotash",
        "Springtime succotash with medley of corn, carrots, ham, spring onions, and fava beans.",
        [
          "/images/recipes/succotash/container.webp",
          "/images/recipes/succotash/main.webp",
          "/images/recipes/succotash/method1.webp",
        ],
        [
          "4-5 tablespoons extra virgin olive oil ",
          "2 cups shucked and shelled fava beans* (can substitute fresh or frozen lima beans or peas) ",
          "2 cups corn (fresh or frozen) ",
          "2 cups diced ham (check ham ingredients for gluten-free if cooking gluten-free) ",
          "2 diced carrots ",
          "2-3 chopped spring onions ",
          "2 tablespoons chopped mint or parsley ",
          "Juice of a lemon ",
          "Salt to taste ",
        ],
        [
          "Sauté carrots and ham: ",
          "Heat the olive oil over medium-high heat in a large sauté pan – large enough to hold all of the vegetables and the ham. Add the ham and the carrots and sauté, stirring from time to time, until the ham begins to brown, about 5 minutes. ",
          "Add the corn and spring onions: ",
          "and toss to combine. Sauté for another 2 minutes. ",
          "Add the fava beans: ",
          "which already have been blanched, and cook for one more minute. Turn off the heat and add the lemon juice, and taste for salt. You might not need any because the ham is salty. Cover the pot and let it sit for 2 minutes, to steam. ",
          "To serve, toss in the mint: ",
          "and serve hot or at room temperature. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Chicken Soup with Ginger and Shiitake Mushrooms",
        "A simple, light Chinese chicken soup with chicken thighs, shiitake mushrooms and ginger.",
        [
          "/images/recipes/shiitake/container.webp",
          "/images/recipes/shiitake/main.webp",
        ],
        [
          "1 ounce dried shiitake mushrooms (dried is much preferable to fresh in this recipe)",
          "3 cups boiling water ",
          "1 to 1 1/2 pounds chicken thighs, preferably bone-in, cut into chunks",
          "A 1-inch piece fresh ginger, peeled and sliced very thin ",
          "2 tablespoons soy sauce (use gluten-free soy sauce for gluten-free version)",
          "2 teaspoons sugar ",
          "Pinch salt ",
          "1 teaspoon cornstarch ",
        ],
        [
          "Soak dried mushrooms: ",
          "Soak the dried mushrooms in the hot water for 20 minutes. Use a bowl or a smaller pot to keep the mushrooms submerged in the water. ",
          "Marinate chicken: ",
          "While the mushrooms are soaking, mix the soy, sugar, salt and cornstarch in a large bowl. Make sure there are no cornstarch lumps. Add the chicken and ginger to the bowl, toss to coat with the marinade, and set aside. ",
          "Slice mushrooms, add to chicken:",
          "When the mushrooms have softened, remove from the water (saving the soaking liquid) and slice thin. Add the mushrooms into the bowl with the chicken. If the soaking water has grit in it, pour the soaking water though a fine-meshed sieve lined with a paper towel into another bowl. ",
          "Cook chicken, mushrooms with mushroom soaking water: ",
          "Put the chicken mushroom mixture, and the mushroom soaking liquid into a pot and bring to a boil. Lower the heat to a bare simmer, cover the pot and cook gently for 25 minutes. Serve hot. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Easy Salmon Foil Packets with Vegetables",
        "This easy, all-in-one Salmon Foil Packet with potatoes, snap peas, and tomatoes gets its spicy zing from Harissa paste, a North African spice mix. Baking in foil makes super-tender salmon and clean up is a snap! This dinner is designed to feed two, but it’s easy to scale up or down",
        [
          "/images/recipes/salmon/container.webp",
          "/images/recipes/salmon/main.webp",
          "/images/recipes/salmon/method1.webp",
        ],
        [
          "For the Harissa Mayonnaise:",
          "1/4 cup mayonnaise ",
          "1 teaspoon harissa paste ",
          "1 teaspoon honey ",
          "1 tablespoon lime juice ",
          "For the salmon packets:",
          "2 to 4 teaspoons olive oil ",
          "1 yellow potato (6 ounces), very thinly sliced ",
          "1/4 teaspoon salt ",
          "1/8 teaspoon pepper ",
          "2 handfuls (4 ounces) fresh sugar snap peas, ends trimmed ",
          "12 to 16 cherry tomatoes, halved ",
          "2 teaspoons lime juice ",
          "2 (6-ounce) skinless salmon fillets ",
          "For garnish:",
          "1 lime, thinly sliced ",
          "Chopped parsley ",
        ],
        [
          "Preheat the oven: ",
          "to 375oF. ",
          "Make the harissa mayonnaise:",
          "In a small bowl, stir the mayonnaise, harissa paste, honey, and lime juice. ",
          "Assemble the packets:",
          "On a work surface, place an 18-inch-long piece of foil, preferably non-stick, with the long side parallel to the countertop. Brush the face-up side of the foil with 1 teaspoon of oil. (Optional: Instead of oiling the foil, cut a piece of parchment that is 9- by 12-inches and place it over one half of the foil.) \n Arrange half the potatoes on the oiled side of the foil and sprinkle with a pinch of salt and a pinch of pepper. \n Place half the snap peas over the potatoes, followed by half the cherry tomatoes. Sprinkle lightly with salt and pepper, and drizzle with 1 teaspoon oil. Sprinkle with 1 teaspoon of lime juice. Place a salmon fillet over the vegetables and spread with half the harissa mayonnaise. ",
          "Fold and seal the packet: ",
          "Fold the foil over the fish so the ends meet. Fold all three open sides to make a border of about 1 inch, and crimp them to tightly seal the packet. Place on a baking sheet. \n Repeat with the second sheet of foil, vegetables, and salmon.",
          "Bake the packets:",
          "Bake the packets for 20 to 22 minutes, or until the salmon and vegetables are cooked through. \n Carefully open one of the packets to peek. The internal temperature of the thickest part of fish should register 140oF on an instant-read thermometer. \n (Note that the fish will continue to cook for a few minutes once it is removed from the oven.) ",
          "Serve the salmon: ",
          "Open the packets carefully (be prepared for hot steam to escape.) Slide a large spatula under the potatoes and transfer the vegetables and fish to dinner plates. Garnish with the lime slices and a few sprinkles of chopped parsley. Serve with rice, if you like. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "'Kale' sadilla",
        "Kale Quesadilla! with finely shredded kale, red bell peppers, red onions, cumin, and cheddar cheese",
        [
          "/images/recipes/kale/container.webp",
          "/images/recipes/kale/main.webp",
          "/images/recipes/kale/method1.webp",
        ],
        [
          "1 tablespoon extra virgin olive oil ",
          "1/3 cup finely chopped red bell pepper ",
          "1/3 cup finely chopped red onion ",
          "Pinch of ground cumin ",
          "1 1/2 cups thinly sliced kale (remove center rib from kale before slicing) ",
          "1/4 teaspoon butter ",
          "3/4 cup of grated mild cheddar ",
          "2 flour tortillas (use corn tortillas for gluten-free version)",
        ],
        [
          "Sauté bell pepper, onion, add cumin, kale: ",
          "Heat olive oil in a medium sauté pan on medium high heat. Add the chopped bell pepper and red onion, cook until softened, about 3 minutes.  \n Sprinkle with ground cumin. Add the thinly sliced kale and toss to combine. Cook a minute more on medium high, then lower the heat to low and cover the pan. Cook for a couple more minutes until kales is cooked through and softened, remove from heat. ",
          "Heat the tortilla: ",
          "Heat a large cast iron pan on medium high to high heat. Spread a little butter over the bottom of the pan. Place a flour tortilla in the pan and heat until you see bubbles of air pockets starting to form. Then flip the tortilla over and lower the heat to medium.",
          "Add cheese and kale filling to tortilla: ",
          "Sprinkle with half of the cheese. Place a couple scoops of the kale pepper onion mixture on one side of the tortilla.  \n Fold the other side of the tortilla over the side with the kale. Press down with a spatula. When the cheese on one side has melted, flip the tortilla over to the other side. \n When the cheese on that side has melted, remove to a cutting board and repeat with the other tortilla and the remaining cheese and filling. ",
          "Cut the 'kale' sadilla into thirds and serve ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Oat and Tahini Breakfast Cookies",
        "Breakfast cookies are a healthy and delicious grab and go option for busy mornings. They complement a cup of tea or coffee, have little added sugar, and are gluten-free. Each cookie is chock full of nuts, dried fruit, and tahini!",
        [
          "/images/recipes/tahini/container.webp",
          "/images/recipes/tahini/main.webp",
          "/images/recipes/tahini/method1.webp",
        ],
        [
          "1/4 cup pepitas",
          "1/4 cup walnuts, coarsely chopped ",
          "1/4 cup whole almonds",
          "1 1/2 cups old fashioned rolled oats, divided",
          "1/2 teaspoon baking powder",
          "1/2 teaspoon salt",
          "1/4 cup (4 tablespoons, 1/2 stick) unsalted butter, at room temperature",
          "1/4 cup brown sugar",
          "1 large egg",
          "1 large egg white",
          "1/4 cup tahini",
          "1 teaspoon vanilla",
          "1 teaspoon finely grated orange zest",
          "3/4 cup raisins, diced apricots, and/or cranberries, alone or in combination. ",
        ],
        [
          "Heat the oven:",
          "Set an oven rack in the middle position and heat the oven to 375ºF. Line a baking sheet with parchment. ",
          "Toast the seeds and nuts: ",
          "On the baking sheet, spread the pumpkin seeds, walnuts, and almonds. Roast for 8 to 10 minutes, or until the nuts are fragrant. Let cool briefly. ",
          "Grind 1/2 cup of the oats:",
          "In a food processor, finely grind 1/2 cup of the oats to make oat flour. Add the baking powder and salt and pulse to combine. ",
          "Mix the dough: ",
          "In the bowl of a stand mixer fitted with the paddle attachment or by hand with a wooden spoon, beat the butter and sugar together until creamy. Add the egg, egg white, tahini, vanilla, and orange zest. Mix until combined, scraping down the bowl as needed. \n Add the oat flour mixture to the dough and mix on low speed until blended. ",
          "Stir in oats, nuts, and dried fruit: ",
          "Add the remaining 1 cup of oats, pumpkin seeds, walnuts, almonds, and dried fruit, and stir to combine.  ",
          "Drop the cookies onto the baking sheet:  ",
          "Use a cookie scoop or a two spoons to drop the dough blobs (about a 1/4 cup each) onto the baking sheet, spacing them about 2 inches apart. Wet your fingers and gently press the dough to form 3-inch circles with a flat top. ",
          "Bake the cookies:",
          "Bake the cookies for 10 to 12 minutes, or until they are light brown. Remove from the oven and leave to cool completely on the baking sheet. ",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Socca",
        "Socca, a quick and easy gluten-free flatbread, can be served as everything from a crispy cracker for dips and spreads to a succulent crust for pizza. ",
        [
          "/images/recipes/socca/container.webp",
          "/images/recipes/socca/main.webp",
          "/images/recipes/socca/method1.webp",
        ],
        [
          "1 1/2 cups chickpea flour",
          "3 tablespoons olive oil, divided   ",
          "1 teaspoon salt ",
          "1 cup water ",
        ],
        [
          "Combine socca ingredients: ",
          "In a medium mixing bowl, combine the chickpea flour, 2 tablespoons of olive oil, salt, and water. Whisk thoroughly until a smooth batter is formed.  \n If it is thicker than pancake batter, add more water one tablespoon at a time, until pancake batter consistency is reached. When you pull the whisk out of the batter, it should leave a thick ribbon. ",
          "Let the batter rest: ",
          "Let the batter rest for 30 minutes before cooking. ",
          "Heat nonstick skillet or cast iron: ",
          "Heat a large nonstick or well-seasoned cast iron pan over medium-high heat. Drizzle pan with 1/2 tablespoon of olive oil",
          "Cook the socca: ",
          "Once hot, using a measuring cup or ladle pour half of the socca batter into the pan, while simultaneously turning the pan in a circular motion to help the batter spread evenly.  \n Cook socca, until the top appears nearly set, about 2 minutes. Similar to pancakes, any bubbles that appeared should have set. There will be a visible firming on top at the edges, but no char spots on top.  \n Flip socca with a large metal spatula and continue to cook, about another minute. It should have some brown spots on both sides. Remove from the pan. \n Add the remaining 1/2 tablespoon of olive oil to the pan and cook the rest of the socca batter.",
          "Serve: ",
          "Socca is ready to serve as soon as it comes out of the pan. Keep it whole and top with pizza toppings, slice into triangles and serve with dip, or cut in half and fill with sandwich fixings.",
        ],
        callback
      );
    },
    function (callback) {
      recipesCreate(
        "Homemade Granola Bars",
        "Chewy granola bars are so easy to make at home and they're the perfect canvas for your favorite combination of dried fruit, nuts, and seeds. Make this easy, healthy, gluten-free snack today!",
        [
          "/images/recipes/granola/container.webp",
          "/images/recipes/granola/main.webp",
          "/images/recipes/granola/method1.webp",
        ],
        [
          "1 1/2 cups old fashioned oats",
          "1/2 cup oat flour (or 1/2 cup old fashioned oats pulsed in a food processor until finely ground)",
          "1/2 teaspoon salt",
          "1/4 teaspoon ground cinnamon",
          "3/4 cup raw almonds, rough chopped",
          " 3/4 cup raw pumpkin seeds",
          "1/2 cup dried cherries, rough chopped",
          "1/2 cup unsweetened coconut flakes",
          "1/3 cup creamy almond butter",
          "1/3 cup coconut oil",
          "1/2 cup honey",
          "2 tablespoons corn syrup",
        ],
        [
          "Preheat oven and prepare baking pan: ",
          "Preheat the oven to 325°F.  \n Line a 9x9 inch baking pan with parchment paper, leaving enough overhang on 2 opposite sides to form a “sling.” You will use the overhang to lift the bars out of the pan once they have cooled. ",
          "Combine the dry ingredients: ",
          "In a large bowl, stir together the oats, oat flour, salt, and cinnamon until well combined. ",
          "Prepare the mix ins: ",
          "Add the chopped almonds, pumpkin seeds, chopped dried cherries, and unsweetened coconut flakes or 2 1/ 2 cups of mix-ins of your choice to bowl with oat mixture. ",
          "Simmer wet ingredients: ",
          "In a small saucepan over medium heat combine the almond butter, coconut oil, honey, and corn syrup using a heat proof spatula. \n Bring to a simmer, stirring occasionally. Continue to simmer for 1 minute, stirring constantly to ensure the nut butter does not burn. Remove from heat and stir in the vanilla extract. ",
          "Combine and shape granola bars: ",
          "Pour the wet ingredients over the oat mixture. Use a rubber spatula to combine until everything is fully coated. \n Transfer the granola mixture to the parchment-lined baking pan. Place a piece of parchment paper on top of the mixture and use your hands to spread and press it evenly into the pan. Using the bottom of a cup, firmly press the mixture down until it is even, flat, and compact. Remove the top piece of parchment. ",
          "Bake granola bars: ",
          "Place the bars in the oven and bake until the edges just begin to turn golden brown, about 25 minutes. ",
          "Chill: ",
          "Remove pan from the oven place on a cooling rack for about 30 minutes. Then transfer the pan uncovered to the fridge for another 30 minutes. ",
          "Cut and enjoy: ",
          "Use the parchment sling to transfer the granola to a cutting board. Using a chef’s knife, cut into 12 bars (one cut down the center and 5 cuts across). ",
        ],
        callback
      );
    },
  ]);
}

async.series([createRecipes], function (err) {
  if (err) {
    console.log("FINAL ERR: " + err);
  } else {
    console.log("Items: " + recipes);
  }
  mongoose.connection.close();
});
