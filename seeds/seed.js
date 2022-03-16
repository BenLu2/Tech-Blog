const sequelize = require('../config/connection');
<<<<<<< HEAD
const { Post, User, Comments } = require("../models/index.js")

const postData = require("./blogData.json")
const userData = require("./userData.json")
const commentData = require("./commentData.json")

const seedAll = async () => {
=======
const { User, Blog } = require('../models/index.js');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
>>>>>>> parent of 3526a89 (redo)
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
  await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
