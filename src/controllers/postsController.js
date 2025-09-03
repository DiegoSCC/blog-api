const Posts = require('../models/posts');

const createPost = async (req, res) => {
    try {
        const { title, content, published } = req.body;
        const post = await Posts.create({
            title,
            content,   
            author_id: req.user.id, 
            published: published || false
            });

        res.status(201).json({
            message: 'Post created successfully',
            post: { id: post.id, title: post.title, published: post.published }
        });
    } catch (error) {
        res.status(400).json({
            error: 'Post creation failed',
            message: error.message
        });
    }
};

module.exports = { createPost };