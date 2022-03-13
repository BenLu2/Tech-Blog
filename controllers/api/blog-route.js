const router = require('express').Router();
const Blog = require('../models/Blog');

// get one post without serializing data
// router.get('/Blog/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.findByPk(req.params.id);
//     console.log(blogData)
//     res.render('dish', blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get one blog with serialized data
router.get('/Blog/:id', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const BlogData = await Blog.findByPk(req.params.id);
  console.log(BlogData)
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  const blog = BlogData.get({ plain: true });
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('blog', blog);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

