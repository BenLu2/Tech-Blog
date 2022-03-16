const sequelize = require('../config/connection');
const { Post, User } = require("../models")

const postData = require("./blogData.json")
const userData = require("./userData.json")


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedAll();
