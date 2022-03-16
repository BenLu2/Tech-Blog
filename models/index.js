const User = require('./User');
const Blog = require("./Blog")

Blog.belongsTo(User, {
    foreignKey: "user_id", 
    onDelete: "CASCADE",
})


module.exports = { Blog, User };
