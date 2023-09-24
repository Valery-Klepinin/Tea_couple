const router = require('express').Router();
const { Product, Newsline, Lesson } = require('../../db/models');
const upload = require('../../middleware/uploadPhotos');

// Get___________________________________________________________
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.get('/news', async (req, res) => {
  try {
    const news = await Newsline.findAll();
    res.json(news);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.get('/lessons', async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.json(lessons);
  } catch ({ message }) {
    res.json({ message });
  }
});

// Delete___________________________________________________________
router.delete('/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Product.destroy({ where: { id: productId } });
    if (result > 0) {
      return res.json(+productId);
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/news/:newsId', async (req, res) => {
  try {
    const { newsId } = req.params;
    const result = await Newsline.destroy({ where: { id: newsId } });
    if (result > 0) {
      return res.json(+newsId);
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/lessons/:lessonId', async (req, res) => {
  try {
    const { lessonId } = req.params;
    const result = await Lesson.destroy({ where: { id: lessonId } });
    if (result > 0) {
      return res.json(+lessonId);
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

// Post___________________________________________________________
router.post('/products', async (req, res) => {
  try {
    const { img } = req.files;
    const { title, description, price } = req.body;

    const imgg = await upload(img);

    let newProduct = await Product.create({
      title,
      description,
      price,
      admin_id: 2,
      raiting: 0,
      availability: true,
      subCategory_id: 2,
      img: imgg
    });
    // newProduct = await Product.findOne({
    //   where: { id: newProduct.id },
    //   include: [{ model: subCategory }, { model: Photo }],
    // });
    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

router.post('/news', async (req, res) => {
  try {
    const { img } = req.files;
    const { title, description } = req.body;

    const imgg = await upload(img);

    const newNews = await Newsline.create({
      title,
      description,
      img: imgg,
      admin_id: 2,
    });

    
    return res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

router.post('/lessons', async (req, res) => {
  try {
    const { title, video, description } = req.body;
    const newLesson = await Lesson.create({
      title,
      video,
      description,
      admin_id: 2,
    });
    res.json(newLesson);
  } catch ({ message }) {
    res.json({ message });
  }
});
// Put___________________________________________________________

module.exports = router;
