var express = require("express");
var router = express.Router();
const recipe_controller = require("../controllers/recipeConrtoller");
const user_controller = require("../controllers/userController");

/* GET home page. */
router.get("/", recipe_controller.recipe_list);
router.get("/recipe/:id", recipe_controller.recipe_details);

router.get("/recipeCreate", recipe_controller.recipe_create_get);
router.post("/recipeCreate", recipe_controller.recipe_create_post);

router.get("/signUp", user_controller.user_create_get);
router.post("/signUp", user_controller.user_create_post);

router.get("/logIn", function (req, res, next) {
  res.render("login");
});

router.post("/user/:id/delete", user_controller.user_recipe_delete_post);

router.get("/user/:id/edit", user_controller.user_recipe_update_get);
router.post("/user/:id/edit", user_controller.user_recipe_update_post);
module.exports = router;
