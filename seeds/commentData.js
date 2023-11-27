const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "User 1 made this comment on post1",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "User 1 made this comment on post2",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "user2 made this comment on post1",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "user2 made this comment on post2",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;