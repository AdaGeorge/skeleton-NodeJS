const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Categories = require('./categories.models')
const Users = require('./users.models')

const Posts = db.define('posts', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        field: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            ket: 'id'
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        field: 'category_id',
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        }
    }
})

module.exports = Posts