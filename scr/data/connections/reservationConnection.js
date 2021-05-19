const general = require('./general');
const reservationQueries = require('../queries/ReservationQueries');

exports.createReservation = async function (id_class, id_customer) {
  return general.doSimpleQuery(reservationQueries.createReservation(id_class, id_customer));
}

exports.getReservationsById = async function (id_customer) {
  return general.doSimpleQuery(reservationQueries.getReservationsById(id_customer));
}

exports.deleteRegistration = async function (id_class, id_customer) {
  return general.doSimpleQuery(reservationQueries.deleteRegistration(id_class, id_customer));
}
