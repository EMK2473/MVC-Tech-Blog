// Import the required modules
const router = require("express").Router();
const { Comment } = require("../../models");
// import authorization helper
const authorization = require("../utils/authorizer");

router.post("/", authorization, async (req, res) => { // needs to be logged in, so needs authentication
  try {    
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;