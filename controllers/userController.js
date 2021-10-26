const User = require("../models/user");
const Recipes = require("../models/recipe");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

exports.user_create_get = function (req, res, next) {
  res.render("signUp");
};

exports.user_create_post = function (req, res, next) {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    // if err, do something
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    }).save((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/logIn");
    });
  });
};

exports.user_recipe_delete_post = function (req, res, next) {
  console.log(req.body);
  Recipes.findByIdAndRemove(req.body.recipeid, function deleteRecipe(err) {
    if (err) {
      return next(err);
    }
    // Success - go to bookinstance
    res.redirect("/");
  });
};

exports.user_recipe_update_get = function (req, res, next) {
  Recipes.findById(req.params.id).exec(function (err, recipe) {
    if (err) {
      return next(err);
    }
    if (recipe == null) {
      let err = new Error("Recipe not found");
      err.status = 404;
      return next(err);
    }
    res.render("recipe_form", {
      recipe,
    });
  });
};

exports.user_recipe_update_post = [
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

    let recipe = new Recipes({
      recipe_name: req.body.recipe_name,
      recipe_description: req.body.description,
      imgs: req.body.imgs,
      ingredients: req.body.ingredients,
      method: req.body.method,
      _id: req.params.id,
    });

    console.log(req.params.id);
    if (!errors.isEmpty()) {
      res.render("recipe_form", {
        recipe,
        errors: errors.array(),
      });
    } else {
      Recipes.findByIdAndUpdate(req.params.id, recipe, function (err) {
        if (err) {
          return next(err);
        }
        //  Successful
        res.redirect("/");
      });
    }
  },
];
