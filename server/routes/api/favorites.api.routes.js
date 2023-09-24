const router = require('express').Router();
const { Favorite, Product } = require('../../db/models');


router.get('/', async (req, res) => {
  try {
    const { user_id } = req.session;
    const favorites = await Favorite.findAll({
      where: { user_id: user_id },
      include: [{ model: Product }],
    });
    res.json(favorites);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const userIdsess = req.session.user_id;
    if (id && userIdsess) {
      let productFav = await Favorite.findOne({
        where: { product_id: id, user_id: userIdsess },
        include: [
          {
            model: Product,
          },
        ],
      });

      if (productFav) {
        await Favorite.destroy({
          where: { id: productFav.id },
        });
        const favorites = await Favorite.findAll({
          where: { user_id: userIdsess },
          include: [{ model: Product }],
        });
        res.json(favorites);
      } else {
        const favorites = await Favorite.create({
          user_id: userIdsess,
          product_id: id,
        });
        const favorites2 = await Favorite.findAll({
          where: { user_id: userIdsess },
          include: [{ model: Product}],
        });
        res.json(favorites2);
      }
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idFavorite', async (req, res) => {
  try {
    const { idFavorite } = req.params;
    const { user_id } = req.session;
    const result = await Favorite.destroy({
      where: { product_id: idFavorite, user_id: user_id },
    });
    if (result > 0) {
      res.json({ message: 'success', id: +idFavorite });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
