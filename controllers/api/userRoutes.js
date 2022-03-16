const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/signup', async(req, res) => {

  console.log('Signup Post Route smacked')

  try {
      const userData = await User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
      })
      console.log('User Created', userData)

      req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.logged_in = true;

          res.json(userData)
      })
  } catch (err) {
      res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
