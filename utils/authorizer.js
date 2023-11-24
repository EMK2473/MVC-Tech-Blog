// dev middleware to check if user is logged in
const authorization = (req, res, next) => {
    if (!req.session.logged_in) {  // if user is not logged in, redirect to login
      res.redirect("/login");
    } else {       // else, next
      next();
    }
  };
module.exports = authorization;