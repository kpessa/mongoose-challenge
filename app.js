const express = require('express');
const app = express();
const port = 3000;
const User = require('./models/User');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nosql', { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

User.create({
  username: 'kpessa',
  email: 'kpessa@gmail.com',
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
