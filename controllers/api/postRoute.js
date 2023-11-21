const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
// import authorization helper
const authorization = require("../utils/authorizer");

router.get("/", async (req, res) => {
  try {
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", authorization, async (req, res) => { // needs to be logged in, so needs authentication
  try {
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", authorization, async (req, res) => { // needs to be logged in, so needs authentication
  try {
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", authorization, async (req, res) => { // needs to be logged in, so needs authentication
  try {
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
