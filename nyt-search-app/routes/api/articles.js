const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");



// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;



// /api/articles (post) - your components will use this to save an article to the database

// /api/articles (delete) - your components will use this to delete a saved article in the database

// * (get) - will load your single HTML page (with ReactJS) in client/build/index.html. Make sure you put this after all other GET routes