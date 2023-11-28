const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/withAuth");

// get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post new comment
router.post("/", withAuth, async (req, res) => { 
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

// get comment by id
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

// delete comment by id
router.delete("/:id", withAuth, async (req, res) => { 
  try {
    console.log('Deleting comment with ID:', req.params.id);
    const deletedComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    if (!deletedComment) {
      res.status(404).json({ message: "No post found!" });
      return;
    }
    res.status(200).json(deletedComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;