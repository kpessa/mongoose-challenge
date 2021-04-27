const { User, Thought, Reaction } = require('../models');

module.exports = {
  addThought: async (req, res) => {
    let user = await User.findById(req.params.userId);
    let thought = await Thought.create({ username: user.username, ...req.body });
    user = await User.findByIdAndUpdate({ _id: req.params.userId }, { $push: { thoughts: thought._id } }, { new: true });
    user = await User.findById({ _id: req.params.userId })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v');
    res.json(user);
  },
};
