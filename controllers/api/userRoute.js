const router = require("express").Router();
const { User } = require("../../models");

// get all users 
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ["password"] }, 
      // hides hashed passwords for insomnia 
    });
    res.json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post new user at /signup view
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    const userData = await newUser.save(); // save() Validates this instance, and if the validation passes, persists it to the database.
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true; 
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// delete user by id (for insomnia)
router.delete("/:id", async (req, res) => {  
  try {
    const deletedUser = await User.destroy({
      where: { id: req.params.id },
    });
    if (!deletedUser) {
      res.status(404).json({ message: "No user found!" });
      return;
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post user logging in at /login view
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.user = {
        username: userData.username
      };
      res.status(200).json({ user: userData, message: "Logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// post user logging out at /logout view
router.post('/logout', (req, res) => {
  req.session.logged_in
    ? req.session.destroy(() => res.status(204).end())
    : res.status(404).end();
});


module.exports = router;