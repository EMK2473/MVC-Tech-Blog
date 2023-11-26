// Import the required modules
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/withAuth");

// post new comment
// creates new Comment by awaiting on the req.body, and the req.session.user_id to exists, then returns as json
router.post("/", withAuth, async (req, res) => { // needs to be logged in -> withAuth
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