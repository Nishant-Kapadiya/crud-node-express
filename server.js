const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello Crud Node Express' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
const UserRoute = require('./app/routes/User');
app.use('/user', UserRoute);

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Databse Connected Successfully!!');
  })
  .catch((err) => {
    console.log('Could not connect to the database', err);
    process.exit();
  });
