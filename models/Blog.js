const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")
class Blog extends Model { }

Blog.init(
<<<<<<< HEAD
    {
        name: {
=======
    
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
>>>>>>> parent of 3526a89 (redo)
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
<<<<<<< HEAD
=======
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
>>>>>>> parent of 3526a89 (redo)
    },
    {
        sequelize
    }
);

module.exports = Blog;