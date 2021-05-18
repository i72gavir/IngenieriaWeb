const classData = require('../data/connections/classConnection');


exports.createCustomer = async function (req) {
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

exports.getClassInfoByCustomer = async function (req) {
  return await classData.getClassInfoByCustomer(req.params.id_customer);
}