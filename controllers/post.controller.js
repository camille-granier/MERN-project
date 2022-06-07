const PostModel = require('../models/post.model');
const postModel = require("../models/post.model");
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readPost = (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error to get data' + err);
    })
}

module.exports.createPost = async (req, res) => {
    const newPost = new postModel({
        posterId: req.body.posterId,
        message: req.body.message,
        video: req.body.video,
        likers: [],
        comments: [],
    });
    
    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch(err) {
        return res.status(400).send(err);
    }
}

module.exports.updatePost = (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send('Unkown id: ' + req.params.id);
    }
    const updatedRecord = {
        message: req.body.message
    }

    PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord },
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log('Error Update: ' + err)
        }
    )
}

module.exports.deletePost = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unkown ' + req.params.id)

        try {
            await PostModel.deleteOne(
                { _id: req.params.id }).exec();
                res.status(200).json({ message: "Successfully deleted"})
            
        } catch(err) {
            return res.status(500).json({ message: err })
        }
}

module.exports.likePost = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unkown ' + req.params.id)

    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: {
                    likers: req.body.id
                },
            },
                { new: true },
                (err, docs) => {
                    if(err) return res.send(400).send(err)
            }
        );
        await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $addToSet:
                { likes: req.params.id}         
            },
            { new: true },
            (err, docs) => {
                if(!err) res.send(docs)
                else return res.status(400).send(err);
            }
        )

    } catch(err) {

    }
    
}

module.exports.unlikePost = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unkown ' + req.params.id)

    
}