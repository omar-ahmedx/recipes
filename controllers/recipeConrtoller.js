const async = require("async");
const Recipes = require("../models/recipe");
const { body, validationResult } = require("express-validator");

exports.recipe_list = function (req, res, next) {
  Recipes.find({}).exec(function (err, recipes) {
    if (err) {
      return next(err);
    }
    res.render("index", { recipes });
  });
};

exports.recipe_details = function (req, res, next) {
  Recipes.findOne({ recipe_name: req.params.id }).exec(function (err, recipe) {
    if (err) {
      return next(err);
    }
    if (recipe == null) {
      let err = new Error("Recipe not found");
      err.status = 404;
      return next(err);
    }
    console.log(recipe);
    res.render("recipe", {
      recipe,
    });
  });
};

exports.recipe_create_get = function (req, res, next) {
  res.render("recipe_form");
};

exports.recipe_create_post = [
  body("recipe_name")
    .trim()
    .isLength({ min: 6 })
    .escape()
    .withMessage("Recipe name must be specified.")
    .isAlphanumeric()
    .withMessage("Recipe name has non-alphanumeric characters."),
  body("description")
    .trim()
    .isLength({ min: 6 })
    .escape()
    .withMessage("Description name must be specified.")
    .isAlphanumeric()
    .withMessage("Description name has non-alphanumeric characters."),

  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      res.render("recipe_form", {
        recipe: req.body,
        errors: errors.array(),
      });
      return;
    } else {
      let recipe = new Recipes({
        recipe_name: req.body.recipe_name,
        recipe_description: req.body.description,
        imgs: req.body.imgs,
        ingredients: req.body.ingredients,
        method: req.body.method,
        user: true,
      });
      recipe.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
    }
  },
];
