const User = require('../models/User');

module.exports = {
  getUsers: async (req, res) => {
    let users = await User.find();
    res.json(users);
  },
  getUserByID: async (req, res) => {
    let user = await User.findById({ _id: req.params.id });
    res.json(user);
  },
  createUser: async (req, res) => {
    let user = await User.create(req.body);
    res.json(user);
  },
  updateUser: async (req, res) => {
    let user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(user);
  },
  deleteUser: async (req, res) => {
    let user = await User.findByIdAndDelete({ _id: req.params.id });
    res.json({ msg: `The user with username ${user.username} has been deleted...` });
  },
};
