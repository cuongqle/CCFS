const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use('/', require('./user'));
app.use('/', require('./debtor'));
app.use('/', require('./template'));

app.all('/200', (req, res) => {
  console.log('request to 200');
  res.status(200).send({status: '200', body: req.body});
});

app.all('/500', (req, res) => {
  console.log('request to 500');
  res.status(500).send({status: '500', body: req.body});
});

app.all('/404', (req, res) => {
  console.log('request to 404');
  res.status(404).send({status: '404', body: req.body});
});

app.listen(9001, () => {
  console.log('Backend stub running on port 9001');
});
