const classData = require('../data/connections/classConnection');
const reservationData = require('../data/connections/reservationConnection');


exports.createClass = async function (req) {
  const id_staff = req.body.id_staff;
  const name = req.body.name;
  const description = req.body.description;
  const enter = req.body.enter;
  const exit = req.body.exit;
  const capacity = req.body.capacity;
  return await classData.createClass(id_staff, name, description, enter, exit, capacity);
}

exports.getClassInfo = async function (params) {
  return await classData.getClassInfo(params.id_class);
}

exports.getAllClassInfo = async function () {
  return await classData.getAllClassInfo();
}

exports.getClassInfoByCustomer = async function (req) {
  return await classData.getClassInfoByCustomer(req.params.id_customer);
}

exports.getAllClassesForCustomer = async function (req) {
  const reservationsByCustomer = await reservationData.getReservationsById(req.body.id_customer);
  const allClases = await classData.getAllClassInfo();

  const avaiableClases = allClases.filter(function(clase, index, arr) { 
    console.log("in filter");
    console.log(clase.id_clase)
    let isRegistered = false; 
    for (let i = 0; i < reservationsByCustomer.length; i++) {
      
      if (clase.id_clase == reservationsByCustomer[i].id_clase) { 
        console.log("heeeeeeeeeeeeeeeere");
        isRegistered = true;
      }
    }
    return !isRegistered;
  });
  console.log("in class for customer");
  console.log(reservationsByCustomer);
  console.log(allClases);
  return avaiableClases;
}