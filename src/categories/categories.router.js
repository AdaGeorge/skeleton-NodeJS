const router = require('express').Router()

const categoriesServices = require('./categories.services')
const { getAllPostsByCategory } = require("../posts/posts.services");


router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.postCategory)

router.get('/:id', categoriesServices.getCategory)

router.get('/:id/posts', getAllPostsByCategory)

module.exports = router