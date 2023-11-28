const { User } = require("../models");

const userData = [
  {
    username: "aFunnyGuy",
    email: "aFunnyGuy@email.com",
    password: "Password",
  },
  {
    username: "XxTechBloggerxX",
    email: "XxTechBloggerxX@email.com",
    password: "Password",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
