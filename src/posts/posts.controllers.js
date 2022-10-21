const Posts = require("../models/posts.models");
const uuid = require("uuid");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");

const getAllPosts = async () => {
  const data = await Posts.findAll({
    attributes: {
      exclude: ["userId", "categoryId", "updatedAt", "createdAt"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Categories,
        attributes: {
          exclude: ["id"],
        },
      },
    ],
  });
  return data;
};

const getPostsByCategory = async (categoryId) => {
  const data = await Posts.findAll({
    where: {
      categoryId,
    },
  });
  return data;
};

const getPostById = async (id) => {
  const data = await Posts.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["userId", "categoryId", "updatedAt", "createdAt"],
    },
    include: [
      {
        model: Users,
        as: "user",
        attributes: ["id", "firstName", "lastName", "email"],
      },
      {
        model: Categories,
        attributes: {
          exclude: ["id"],
        },
      },
    ],
  });
  return data;
};

const createPost = async (data) => {
  const newPost = {
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId,
    categoryId: data.categoryId,
  };
  const response = await Posts.create(newPost);
  return response;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  getPostsByCategory
};
