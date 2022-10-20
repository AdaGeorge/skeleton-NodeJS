const Posts = require("../models/posts.models");
const uuid = require("uuid");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");

const getAllPosts = async () => {
  const data = await Posts.findAll({
    include: [
      {
        model: Users
      },
      {
        model: Categories,
        attributes:{
          exclude: ['id']
        }
      }
    ]
  });
  return data;
};

const getPostById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id
    },
  });
  return data;
};

const createPost = async (data) => {
  const newPost = {
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    createdBy: data.userId,
    categoryId: data.categoryId
  };
  const response = await Posts.create(newPost);
  return response;
};




module.exports = {
  getAllPosts,
  getPostById,
  createPost
};
