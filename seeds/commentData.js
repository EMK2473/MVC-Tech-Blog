const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This is not very funny.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Well, that's your VIEW.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "The MVC system, which originated in the 1970s in connection with building graphical UIs, is widely used in program development, especially for today's web applications and object-oriented programming (OOP). Developers use a range of programming languages, including Java, Python, JavaScript, C#, Swift, Perl and PHP, to build applications based on MVC. Most of these languages also have MVC frameworks available to them to help streamline the development process. Popular MVC frameworks include Django, Ruby on Rails, Symfony, Catalyst and CherryPy, among many others.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "MVC offers development teams important benefits. Programmers can build components simultaneously without stepping over each other's work, and they can reuse components. They can also deploy and maintain the components independently from others. MVC makes it easier to build large, complex applications, leading to faster, more efficient development efforts. In addition, MVC supports test-driven development, while making it possible to test and troubleshoot components individually.",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;