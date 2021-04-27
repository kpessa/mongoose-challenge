const router = require('express').Router();

const { getAllThoughts, addThought, removeThought, deleteAllThoughts } = require('../../controllers/Thought');

//! Five CRUD Operations
router.route('/').get(getAllThoughts).post(addThought).delete(deleteAllThoughts);
router.route('/:id').delete(removeThought);

module.exports = router;
