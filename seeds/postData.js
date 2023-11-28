const { Post } = require("../models");

const postData = [
  {
    title: "A Model, a View, and a Controller walk into a bar",
    content: "A Model, a View, and a Controller walk into a bar and sit down to order some drinks from the bartender. The View has a few more drinks than the others and turns to the Model and says, “Can you give me a ride home tonight? I know I always burden you with this, but I can never depend on that guy.”",
    user_id: 1,
  },
  {
    title: "What is model-view-controller (MVC)?",
    content: "In programming, model-view-controller (MVC) is an architectural design pattern that organizes an application's logic into distinct layers, each of which carries out a specific set of tasks. The layers also interact with each other to ensure that the application's functionality is delivered in a coordinated and consistent manner. The MVC methodology incorporates the entire application, from the user interface (UI) to the underlying data model.",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;