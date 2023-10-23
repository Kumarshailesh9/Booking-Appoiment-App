const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');

// Define routes using the controller methods
router.get('/users', UserController.getUsers);
router.post('/users', UserController.createUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
