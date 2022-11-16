module.exports = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};