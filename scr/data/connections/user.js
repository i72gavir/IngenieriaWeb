const general = require('./general');
const userQueries = require('../queries/userQueries.js');

exports.getAllStaff = async function () {
  return general.doSimpleQuery(userQueries.getAllStaff());
}

exports.registerStaff = async function (name, dni, phone, password, address, email) {
  return general.doSimpleQuery( userQueries.registerStaff(name, dni, phone, password, address, email) );
}

exports.lookStaff = async function (email, password) {
  return general.doSimpleQuery(userQueries.lookStaff (email, password) );
}

exports.getStaffById = async function (id_staff) {
  console.log(userQueries.getStaffById (id_staff));
  return general.doSimpleQuery(userQueries.getStaffById (id_staff) );
}



