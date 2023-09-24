const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
  try {
    let user;
    const { name, surname, email, password, phone, city, street, house } =
      req.body;
    if (
      name &&
      surname &&
      email &&
      password &&
      phone &&
      city &&
      street &&
      house
    ) {
      user = await User.findOne({ where: { email } });
      if (user) {
        res.status(400).json({ message: 'Данная почта уже существует' });
        return;
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        user = await User.create({
          name,
          surname,
          email,
          password: hash,
          phone,
          city,
          street,
          house,
        });
        req.session.user_id = user.id;
        res.status(200).json(user);
        return;
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля!' });
      return;
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.post('/auth', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!email || !password) {
      res.status(400).json({ message: 'Заполните все поля' });
      return;
    }
    if (!user) {
      res.status(400).json({ message: 'Почта или пароль не совпадают' });
      return;
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!user || !compare) {
      res.status(400).json({ message: 'Почта или пароль не совпадают' });
      return;
    }
    req.session.user_id = user.id;
    res.status(200).json(user);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.user_id) {
      const user = await User.findOne({ where: { id: req.session.user_id } });
      res.json(user);
      return;
    }
    res.json(null);
  } catch ({ message }) {
    res.json({ message });
  }
});
 
 router.get('/logout', (req, res) => {
   // удаление сессии на сервере
   req.session.destroy((error) => {
     if (error) {
       return res.status(500).json({ message: 'Ошибка при удалении сессии' });
     }
     res.clearCookie('user_sid').json({ message: 'success' }); // серверное удаление куки по имени
   });
 });
 


module.exports = router;