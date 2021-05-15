"use strict";
const user = require('./logic/userLogic');

const { StatusCodes } = require('http-status-codes');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', async (req, res) => {
  res.json(await user.loginStaff('p02avcag@uco.es', 'gabotk'));
})

app.post('/user/customer', async (req, res) => {
  let result = await user.createCustomer('Pepe', '1234', '3145549090', '1234', 'Cordoba', 'p03avcag@uco.es', '4567-678', 1);
  console.log(result);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.CREATED);
  } else {
    res.send("Error in user/customer");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.post('/user/login', async (req, res) => {
  let result = await user.login(req);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in user/login");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
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

