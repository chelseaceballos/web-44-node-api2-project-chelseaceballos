// implement your posts router here
// GET	/api/posts	Returns an array of all the post objects contained in the database
const express = require('express')
const router = express.Router();
const Post = require('./posts-model');

//END POINTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({
            message: "The posts information could not be retrieved"
        })
    }
})


// DEFAULT EXPORT
module.exports = router