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

/**
 * NOTE: This section has all customer queries
 * */ 

exports.lookCustomer = async function (email, password) {
  return general.doSimpleQuery(userQueries.lookCustomer(email, password));
}

exports.registerCustomer = async function (name, dni, phone, password, address, email, bankAccount, isPaymentOK) {
  return general.doSimpleQuery(userQueries.registerCustomer(name, dni, phone, password, address, email, bankAccount, isPaymentOK));
}

exports.updateCustomer = async function (id_customer, name, phone, address, email) {
  return general.doSimpleQuery(userQueries.updateCustomer(id_customer, name, phone, address, email));
} 
