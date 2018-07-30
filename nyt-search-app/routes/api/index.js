const router = require("express").Router();
const articlesRoutes = require("./articles");

// Saved article routes
router.use("/articles", articlesRoutes);

module.exports = router;
