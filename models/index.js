// import models
const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

// users have many Posts
User.hasMany(Post, {
    foreignKey: "user_id", 
  });
// users have many comments
User.hasMany(Comment, {
    foreignKey: "user_id", 
  });
// User.hasMany([Post, Comment], 
//   {foreignKey: "user_id"})

// posts belong to users
Post.belongsTo(User, {
    foreignKey: "user_id", 
  });
// posts have many comments
Post.hasMany(Comment, {
    foreignKey: "post_id", 
  });
// comments belong to users
Comment.belongsTo(User, {
    foreignKey: "user_id", 
  });
// comments belong to posts
Comment.belongsTo(Post, {
    foreignKey: "post_id", 
  });

module.exports = {
  Comment,
  Post,
  User,
};