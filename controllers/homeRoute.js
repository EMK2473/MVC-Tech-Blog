const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// import withAuth helper
const withAuth = require("../utils/withAuth");

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

router.get("/post/:id", withAuth, async (req, res) => {
  // needs to be logged in, 
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  // needs to be logged in, so needs authentication
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });
    // Convert post data to plain JavaScript object
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  // if logged in, redirect to /dashboard
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
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
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

router.get("/editPost/:id", async (req, res) => {
  // render edit Post page (should be logged in to get access)
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
