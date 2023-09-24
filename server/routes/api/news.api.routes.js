const router = require('express').Router();
const { Newsline } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const news = await Newsline.findAll();
    res.json(news);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
