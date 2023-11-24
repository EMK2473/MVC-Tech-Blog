const router = require("express").Router();
const { User } = require("../../models");

// get all users on back end
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// sign up new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = new User();
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    const userData = await newUser.save();
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


// // create new user
// router.post('/', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     req.session.save(() => {
//       req.session.loggedIn = true;
//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// user logout
router.post('/logout', (req, res) => {
  req.session.loggedIn
    ? req.session.destroy(() => res.status(204).end())
    : res.status(404).end();
});




module.exports = router;