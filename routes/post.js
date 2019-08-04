// express router
const express = require("express");
const { getPosts, createPost } = require("../controllers/post");
const { createPostValidators } = require("../validator");

const router = express.Router();

router.get('/', getPosts);
router.post('/createPost', createPostValidators, createPost);

module.exports = router;

