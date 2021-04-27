const router = require('express').Router();

//? IMPORTING OTHER ROUTES
const userRoutes = require('./users');

//! ROUTES
router.use('/users', userRoutes);

//? EXPORTING ROUTER
module.exports = router;
