module.exports = {
  getIndex: (req, res) => {
    res.json({ user: req.user });
  },
};
