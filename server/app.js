require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

const indexRouter = require('./routes/index');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/', indexRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Трунь трунь трунь на ${4000} порту`);
});
