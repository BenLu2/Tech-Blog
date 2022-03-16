const Post = require("./Post")
const User = require("./User")
const Comments = require('./Comments')

Blog.belongsTo(User, {
    foreignKey: "user_id", // check syntax for the 3 foreign keys
    onDelete: "CASCADE",
})

module.exports = {Post, User, Comments}