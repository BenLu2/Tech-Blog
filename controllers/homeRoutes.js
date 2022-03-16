const router = require('express').Router();
const { Blog } = require('../models')
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  if (req.session.user_id) {
      const myBlogs = await Blog.findAll({
          where: {
              user_id: req.session.user_id
          }, raw: true
      })
      res.render('dashboard',{ logged_in: req.session.logged_in, myBlogs: myBlogs});
  }
  else {
      console.log("you aren't logged in")
      res.render("login")
  }
});

module.exports = router;