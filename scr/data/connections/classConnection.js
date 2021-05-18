const general = require('./general');
const classQueries = require('../queries/classQueries');

exports.createClass = async function (id_staff, name, description, enter, exit, capacity) {
  return general.doSimpleQuery(classQueries.createClass(id_staff, name, description, enter, exit, capacity));
}

exports.getClassInfo = async function (id_class) {
  return  general.doSimpleQuery(classQueries.getClassInfo(id_class));
}

exports.getAllClassInfo = async function () {
  return  general.doSimpleQuery(classQueries.getAllClassInfo());
}

exports.getClassInfoByCustomer = async function (id_customer) {
  return general.doSimpleQuery(classQueries.getClassInfoByCustomer(id_customer));
}