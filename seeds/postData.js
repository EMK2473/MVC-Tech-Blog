const { Post } = require("../models");

const postData = [
  {
    title: "First Post",
    content: "Content of First Post",
    user_id: 1,
  },
  {
    title: "Second Post",
    content: "Content of Second Post",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;