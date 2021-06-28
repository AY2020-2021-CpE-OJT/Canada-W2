const express = require('express');
const router = express.Router();
const Post = require('../models/Item');

//BASICS
//GET ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find(); //empty == all posts
        res.json(posts);
    }catch(err){
        res.json({message: err });
    }
})

//get specific post
router.get('/:postId', async(req, res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//POST something
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        quantity: req.body.quantity
    })
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err });
    }
})
module.exports = router;