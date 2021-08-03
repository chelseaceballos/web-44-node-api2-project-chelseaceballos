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
});

router.get('//:id', (req,res) => { // NOT PASSING
    Post.findById(req.params.id)
    .then( post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        }}       
    ) .catch(err => {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    })
});

router.post('/', (req, res) => {
    
})


// DEFAULT EXPORT
module.exports = router