const express = require('express');
const app = express();
const port = 3000;
const User = require('./models/User');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nosql', { useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/api/users'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
