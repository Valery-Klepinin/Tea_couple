const router = require('express').Router();
const { Product, Category, Subcategory } = require('../../db/models');

router.get('/tea', async (req, res) => {
  try {
    const products = await Product.findAll(
     { include: { model: Subcategory, where: {category_id: 1}} },
    );
    res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.get('/service', async (req, res) => {
  try {
    const products = await Product.findAll(
     { include: { model: Subcategory, where: {category_id: 2}} },
    );
    res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});

// router.get('/:productId', async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const product = await Product.findOne({ where: { id: productId } });
//     res.json(product);
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

module.exports = router;
