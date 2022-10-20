const router = require('express').Router()

const categoriesServices = require('./categories.services')

router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.postCategory)

router.get('/:id', categoriesServices.getCategory)

module.exports = router