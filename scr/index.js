"use strict";
const user = require('./logic/userLogic');
const classLogic = require('./logic/classLogic');
const reservationLogic = require('./logic/reservationLogic');

const { StatusCodes } = require('http-status-codes');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
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

app.put('/user/customer', async (req, res) => {
  res.status(StatusCodes.OK);
  res.send(await user.updateCustomer(req));
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

app.post('/class', async (req, res) => {
  let result = await classLogic.createClass(req);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in /class");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.get('/classinfo', async (req, res) => {
  let result = await classLogic.getAllClassInfo();
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in /classInfo");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.get('/classinfo/:id_class', async (req, res) => {
  let result = await classLogic.getClassInfo(req.params);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in /classinfo/:id_class");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.get('/classinfo/customer/:id_customer', async (req, res) => {
  let result = await classLogic.getClassInfoByCustomer(req);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in /classinfo/customer/:id_customer");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.post('/classinfo/forcustomer', async (req, res) => {
  let result = await classLogic.getAllClassesForCustomer(req);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in /classinfo/forcustomer");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.post('/reservation', async (req, res) => {
  let result = await reservationLogic.createRegistration(req);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in /reservation");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.delete('/reservation', async (req, res) => {
  let result = await reservationLogic.deleteRegistration(req);
  if (result !== 'error') {
    res.json(result);
    res.status(StatusCodes.OK);
  } else {
    res.send("Error in delete /reservation");
    res.status(StatusCodes.METHOD_NOT_ALLOWED);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  // console.log(login.registerPersonel('Gabriel', '12345-Y', '3154805678', 'gabotk', 'Damasco 2', 'p02avcag@uco.es'));
})
