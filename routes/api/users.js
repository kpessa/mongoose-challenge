const router = require('express').Router();

const { getUsers, getUserByID, createUser, updateUser, deleteUser, deleteAllUsers } = require('../../controllers/User');

//! Five CRUD Operations
router.route('/').get(getUsers).post(createUser).delete(deleteAllUsers);
router.route('/:id').get(getUserByID).put(updateUser).delete(deleteUser);

module.exports = router;
