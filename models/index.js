const User = require('./User');
const Post = require("./Post")

Post.belongsTo(User, {
    foreignKey: "user_id", // check syntax for the 3 foreign keys
    onDelete: "CASCADE",
})


module.exports = { Post, User };
