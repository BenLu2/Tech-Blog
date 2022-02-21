const router = require('express').Router();
const Dish = require('../models/Post');

// get one post without serializing data
router.get('/Post/:id', async (req, res) => {
  try {
    const dishData = await Dish.findByPk(req.params.id);
    console.log(dishData)
    res.render('dish', dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one Post with serialized data
router.get('/dish/:id', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const PostData = await Post.findByPk(req.params.id);
  console.log(PostData)
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const post = PostData.get({ plain: true });
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('post', post);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

