const { Post } = require("../models");

const postData = [
  {
    title: "A Model, a View, and a Controller walk into a bar",
    content: "A Model, a View, and a Controller walk into a bar and sit down to order some drinks from the bartender. The View has a few more drinks than the others and turns to the Model and says, “Can you give me a ride home tonight? I know I always burden you with this, but I can never depend on that guy.”",
    user_id: 1,
  },
  {
    title: "We need mods, too many bad joke posts",
    content: "Title explains everything... I remember when this site was cool. edit: No, I won't volunteer.",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;