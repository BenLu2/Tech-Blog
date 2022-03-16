const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('../homeRoutes');


router.use('/users', userRoutes);
router.use("/blog", blogRoutes)
router.use("../homeRoutes", homeRoutes)
module.exports = router;
