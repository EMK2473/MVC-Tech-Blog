const router = require("express").Router();
const { Comment } = require("../../models");
// import authorization, use with authorization

router.post("/", async (req, res) => {
  try {      
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;