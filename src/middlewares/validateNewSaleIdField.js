/* module.exports = (req, res, next) => {
  const { id, quantity } = req.body;
  if (!id) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (quantity == null) {
    return res.status(400).json({ message: '"quantity" is required' });
    }
  if (quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
  }; */