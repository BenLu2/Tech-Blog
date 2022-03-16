<<<<<<< HEAD
const Post = require("./Post")
const User = require("./User")
const Comments = require('./Comments')

Blog.belongsTo(User, {
    foreignKey: "user_id", // check syntax for the 3 foreign keys
    onDelete: "CASCADE",
})

module.exports = {Post, User, Comments}
=======
const User = require('./User');
const Blog = require("./Blog")

Blog.belongsTo(User, {
    foreignKey: "user_id", 
    onDelete: "CASCADE",
})


module.exports = { Blog, User };
>>>>>>> parent of 3526a89 (redo)
