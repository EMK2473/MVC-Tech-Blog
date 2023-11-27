const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This is not very funny.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "So, isFunny: false;",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "You should volunteer",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "I nominate you, FunnyGuy",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;