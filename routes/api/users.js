const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');

router.get('/', async (req, res) => {
  let users = await User.find();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  let user = await User.findById({ _id: req.params.id });
  res.json(user);
});

router.post('/', async (req, res) => {
  let user = await User.create(req.body);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  let user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  let user = await User.findByIdAndDelete({ _id: req.params.id });
  res.json({ msg: `The user with username ${user.username} has been deleted...` });
});

module.exports = router;
