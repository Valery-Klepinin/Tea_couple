const router = require('express').Router();
const { Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ where: { id: productId } });
    res.json(product);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
