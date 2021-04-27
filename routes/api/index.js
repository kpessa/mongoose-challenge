const router = require('express').Router();

//? IMPORTING OTHER ROUTES
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

//! ROUTES
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//? EXPORTING ROUTER
module.exports = router;
