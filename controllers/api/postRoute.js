const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
// import authorize helper
const authorize = require("../../utils/authorizer");

// get all posts from user using username
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get post by :id
router.get("/:id", async (req, res) => {
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
    if (!postData) {
      res.status(404).json({ message: "No post found!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post new post req loggedIn
router.post("/", authorize, async (req, res) => { // needs to be logged in, 
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update/put post req loggedIn
router.put("/:id", authorize, async (req, res) => { // needs to be logged in, 
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });
    if(!updatedPost){
      res.status(404).json({ message: "No post found!"})
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete post req loggedIn
router.delete("/:id", authorize, async (req, res) => { // needs to be logged in, 
  try {
    await Comment.destroy({
      where: { post_id: req.params.id },
    });

    const deletedPost = await Post.destroy({
      where: { id: req.params.id },
    });

    if (!deletedPost) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
