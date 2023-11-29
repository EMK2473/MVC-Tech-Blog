const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/withAuth");

// get all posts and render home view
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a post by id and render post view
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username", "id"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username", "id"] }],
        },
      ],
    });
    const post = postData.get({ plain: true });
    console.log(post)
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      comments: post.comments.map(comment => ({ 
        // passing, and mapping, the comments of rendered post to the 'get route' as comment.user.id. This allows the 'get' route, for the delete button in post.hbars, to use the value of the comment's user_id as the reference for deletion as the route parameter.
        ...comment,
        user_id: comment.user.id
      })),
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all posts by user and render dashboard
router.get("/dashboard", withAuth, async (req, res) => {
      console.log('Dashboard route:', req.session.logged_in);
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.user.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    // Retrieve the logged-in user's ID from the session
    const userId = req.session.user_id;
    console.log('User ID:', userId);

    // Redirect to the user's profile page with their ID
    res.redirect(`/profile/${userId}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get user profile 
router.get("/profile/:id", withAuth, async (req, res) => {
  console.log('profile route:', req.session.logged_in);
try {
  const profileData = await User.findByPk(req.session.user_id, {
    attributes: ["username", "email", "id"],
  });
if(!profileData) {
  res.status(404).json({ message: "Profile not found!"})
  return
}
console.log('User Profile:', profileData.get({ plain: true }));

const profile = profileData.get({ plain: true })
console.log('User variable:', profile);

res.render("profile", {
  profile,
  logged_in: req.session.logged_in,
  username: req.session.user.username,
});
} catch (err) {
res.status(500).json(err);
}
});

// get post to edit and render edit post view
router.get("/editPost/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"]},
        { model: Comment, include: [{model: User, attributes: ["username"]}]}
      ]
    })
    const post = postData.get({ plain: true })
    res.render('editPost', {
      ...post,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

// get login view if not logged in, else redirect to dashboard
router.get("/login", async (req, res) => {
  req.session.logged_in ? res.redirect("/dashboard") : res.render("login");
});

// get new post view if logged in, else redirect to home
router.get("/newpost", async (req, res) => {
  req.session.logged_in ? res.render('newPost') : res.redirect('/');
});

// get sign up view if not logged in, else redirect to dashboard
router.get("/signup", async (req, res) => {
  req.session.logged_in ? res.redirect("/dashboard") : res.render("signup");
});


module.exports = router;
