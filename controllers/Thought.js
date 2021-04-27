const { User, Thought, Reaction } = require('../models');

module.exports = {
  getAllThoughts: async (req, res) => {
    let thoughts = await Thought.find();
    res.json(thoughts);
  },
  addThought: async (req, res) => {
    let thought = await Thought.create(req.body);
    let user = await User.findByIdAndUpdate({ _id: req.body.userId }, { $push: { thoughts: thought._id } }, { new: true });
    user = await User.findById({ _id: req.body.userId })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .select('-__v');
    res.json(user);
  },
  removeThought: async (req, res) => {
    let thought = await Thought.findById(req.params.id);
    let user = await User.findOneAndUpdate({ username: thought.username }, { $pull: { thoughts: thought._id } });
    thought.delete();
    res.json({ msg: 'Thought has been deleted' });
  },
  deleteAllThoughts: async (req, res) => {
    await Thought.deleteMany();
    res.json({ msg: 'Thought collection has been cleared' });
  },
};
