const Categories = require('./categories.models')
const Posts = require('./posts.models')
const Users = require('./users.models') 

const initModel = ()=>{
    Users.hasMany(Posts)
    Posts.belongsTo(Users)
    
    Categories.hasMany(Posts)
    Posts.belongsTo(Categories)
}

module.exports = initModel