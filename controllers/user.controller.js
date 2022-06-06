const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

//get all users
module.exports.getAllUsers = async (req, res) => {
    //avoid to select password
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
};

//get one user
module.exports.userInfo = async (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params))
    return res.status(400).send('ID unknown ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs);
        else console.log('ID unknown ' + err);
    }).select('-password');
}

//Update one user info
module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params))
        return res.status(400).send('ID unkown ' + req.params.id)
}