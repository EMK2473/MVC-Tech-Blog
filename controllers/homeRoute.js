const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// import authorize helper
const authorize = require("../utils/authorizer");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", authorize, async (req, res) => {
  // needs to be logged in, so needs authentication
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", authorize, async (req, res) => {
  // needs to be logged in, so needs authentication
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  // if logged in, redirect to /dashboard
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newPost", async (req, res) => {
  // if logged in, render newPost
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  // if logged in, redirect to /dashboard
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/editPost/:id", async (req, res) => {
  // render edit Post page (should be logged in to get access)
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
