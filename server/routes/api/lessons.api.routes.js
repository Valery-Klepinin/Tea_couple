const router = require('express').Router();
const { Lesson } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.json(lessons);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
