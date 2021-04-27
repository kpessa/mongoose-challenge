//? IMPORTING 3RD PARTY PACKAGES
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//! IMPORTING ROUTES
app.use('/api', require('./routes/api'));

mongoose.set('useCreateIndex', true);
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/nosql', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
    // mongoose.set('debug', true);
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  });
