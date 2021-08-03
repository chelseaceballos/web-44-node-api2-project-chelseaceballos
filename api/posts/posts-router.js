// implement your posts router here
// GET	/api/posts	Returns an array of all the post objects contained in the database
const express = require('express')
const router = express.Router();
const Post = require('./posts-model');

//END POINTS


// DEFAULT EXPORT
module.exports = router