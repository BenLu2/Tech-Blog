const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('../homeRoutes');


router.use('/users', userRoutes);
<<<<<<< HEAD
router.use("/blogRoutes", blogRoutes)
=======
router.use("/blog", blogRoutes)
>>>>>>> parent of 3526a89 (redo)
router.use("../homeRoutes", homeRoutes)
module.exports = router;
