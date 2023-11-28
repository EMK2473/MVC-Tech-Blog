// Import the required modules
const router = require("express").Router();
const { Comment, User } = require("../../models");
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




router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username", "id"] }]
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//todo:
// if logged in, delete button pops up for delete comment
router.delete("/:id", withAuth, async (req, res) => { // needs to be logged in -> withAuth
  try {
    const deletedComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (!deletedComment) {
      res.status(404).json({ message: "No post found!" });
      return;
    }
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;