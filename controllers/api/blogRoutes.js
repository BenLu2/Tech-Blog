const router = require('express').Router();
<<<<<<< HEAD
const Blog = require('../../models');

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
=======
const { Blog } = require('../../models');



router.post('/', async(req, res) => {

  console.log('Creat Post route smacked')
  try {
      const newBlog = await Blog.create({
          ...req.body,
          user_id: req.session.user_id,
      });

      res.status(200).json(newBlog);
  } catch (err) {
      res.status(400).json(err);
  }
});

// get one blog with serialized data
router.get('/:id', async (req, res) => {
>>>>>>> parent of 3526a89 (redo)
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

