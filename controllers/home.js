const router = require("express").Router();
const { Post, User, Comment } = require("../models");
// import authorization, use with authorization

router.get("/", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newPost", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/editPost/:id", async (req, res) => {
    try {
    } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;