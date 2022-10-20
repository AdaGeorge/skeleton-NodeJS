const router = require('express').Router()

const passport = require('passport')

const postsServices = require('./posts.services')


router.route('/')
    .get(postsServices.getAllPosts)
    .post(
        passport.authenticate('jwt', {session: false}),
        postsServices.postAPost
        )

router.get('/:id', postsServices.getPost)

module.exports = router