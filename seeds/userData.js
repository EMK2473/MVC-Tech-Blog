const { User } = require("../models");

const userData = [
  {
    username: "user1",
    email: "user@email.com",
    password: "password1",
  },
  {
    username: "user2",
    email: "user2@email.com",
    password: "password2",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
