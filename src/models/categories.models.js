const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Categories = db.define('categories', {
    id : {
        primaryKey: true, 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    //? Evita que cree updated_at y created_at
    timestamps: false
})

module.exports = Categories