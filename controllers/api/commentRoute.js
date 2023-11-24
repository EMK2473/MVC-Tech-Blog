// Import the required modules
const router = require("express").Router();
const { Comment } = require("../../models");
const authorize = require("../../utils/authorizer");

// post new comment
router.post("/", authorize, async (req, res) => { // needs to be logged in -> authorize
  try {   
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;