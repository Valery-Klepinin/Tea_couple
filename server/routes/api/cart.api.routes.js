const router = require('express').Router();
const { Order, OrderItem, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { user_id: req.session.user_id, purchcase: false },
    });
    if (order) {
      const orderItems = await OrderItem.findAll({
        where: { order_id: order.id },
        include: { model: Product },
      });
      res.json(orderItems);
    } else {
      res.status(400).json({ message: 'нет' });
    }
  } catch ({ message }) {
    //res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { product_id } = req.body;
    let order = await Order.findOne({
      where: { user_id: req.session.user_id, purchcase: false },
    });

    let orderItems;
    if (order) {
      const product = await OrderItem.findOne({
        where: { product_id: product_id, order_id: order.id },
      });
      if (!product) {
        await OrderItem.create({
          order_id: order.id,
          product_id: product_id,
          quantity: 1,
        });
      }
    } else {
      order = await Order.create({
        user_id: req.session.user_id,
        purchcase: false,
      });

      await OrderItem.create({
        order_id: order.id,
        product_id: product_id,
        quantity: 1,
      });
    }
    orderItems = await OrderItem.findAll({
      where: { order_id: order.id },
      include: { model: Product },
    });

    res.json(orderItems);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const result = await OrderItem.destroy({ where: { id: itemId } });
    if (result > 0) {
      res.status(200).json({ message: 'success', id: itemId });
      return;
    }
    res.status(400).json({ message: 'error' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { quantity } = req.body;
    const item = await OrderItem.findOne({
      where: { id: itemId },
      include: { model: Product },
    });
    item.quantity = quantity;
    await item.save();
    res.json({ id: item.id, quantity: item.quantity });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put('/:orderId/close', async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({
      where: { id: orderId },
    });
    order.purchcase = !order.purchcase;
    await order.save();
    const orderitems = await OrderItem.findAll({
      where: { order_id: order.id },
      include: { model: Product },
    });

    const neworderitems = await Promise.all(
      orderitems.map(async (orderitem) => {
        await Product.findOne({
          where: { id: orderitem.Product.id },
        });
        orderitem.Product.raiting += 1;
        await orderitem.Product.save();
      })
    );
    res.status(200).json(orderitems);
  } catch (error) {
    res.json({ message: error.message });
  }
});


module.exports = router;
