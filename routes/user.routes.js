const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

//authentication
router.post("/register", authController.signUp);

//user DB
//all users
router.get('/', userController.getAllUsers)
//one user
router.get('/:id', userController.userInfo)
//update
router.put('./:id', userController.updateUser)

module.exports = router;