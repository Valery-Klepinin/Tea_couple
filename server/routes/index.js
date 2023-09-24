const router = require('express').Router();

const productsApiRouter = require('./api/products.api.routes');
const usersApiRouter = require('./api/users.api.routes');
const categoryApiRouter = require('./api/category.api.routes');
const newsApiRouter = require('./api/news.api.routes');
const lessonsApiRouter = require('./api/lessons.api.routes')
const favoritsApiRouter = require('./api/favorites.api.routes');
const adminApiRouter = require('./api/admin.api.routes')
const cartRouter = require('./api/cart.api.routes');

router.use('/api/category', categoryApiRouter);
router.use('/api/products', productsApiRouter);
router.use('/api/lessons', lessonsApiRouter)
router.use('/api/news', newsApiRouter);
router.use('/api/users', usersApiRouter);
router.use('/api/favorites', favoritsApiRouter);
router.use('/api/admin/', adminApiRouter)
router.use('/api/cart', cartRouter);

module.exports = router;
