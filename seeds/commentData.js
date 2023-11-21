const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "text",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "text",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "text",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "text",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;