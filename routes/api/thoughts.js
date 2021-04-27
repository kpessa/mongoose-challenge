const router = require('express').Router();

const { addThought } = require('../../controllers/Thought');

//! Five CRUD Operations
router.route('/:userId').post(addThought);

module.exports = router;
