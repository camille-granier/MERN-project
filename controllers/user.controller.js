const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.getAllUsers = async (req, res) => {
    //avoid to select password
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};