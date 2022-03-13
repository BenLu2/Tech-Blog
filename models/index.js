const User = require('./User');
const Blog = require("./Blog")

Blog.belongsTo(User, {
    foreignKey: "user_id", // check syntax for the 3 foreign keys
    onDelete: "CASCADE",
})


module.exports = { Blog, User };
