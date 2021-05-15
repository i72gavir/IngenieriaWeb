"use strict";
const user = require('./logic/userLogin');

const express = require('express')
const app = express();
const port = 3000

app.get('/', async (req, res) => {
  res.json(await user.loginStaff('p02avcag@uco.es', 'gabotk'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  // console.log(login.registerPersonel('Gabriel', '12345-Y', '3154805678', 'gabotk', 'Damasco 2', 'p02avcag@uco.es'));
})


/*
connection.connect();
connection.query(login.getAllUsers(), function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is (inside): ', rows)
})
connection.end();*/

