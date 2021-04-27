const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

router.get('/', async (req, res) => {
  let users = await User.find();
  res.json(users);
});

module.exports = router;
