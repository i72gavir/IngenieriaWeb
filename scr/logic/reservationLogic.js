const reservationData = require('../data/connections/reservationConnection');

exports.createRegistration = async function (req) {
  return await reservationData.createReservation(req.body.id_class, req.body.id_customer);
}

exports.deleteRegistration = async function (req) {
  const id_class = req.body.id_class;
  const id_customer = req.body.id_customer;
  return await reservationData.deleteRegistration(id_class, id_customer);
}