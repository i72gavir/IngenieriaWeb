const reservationData = require('../data/connections/reservationConnection');

exports.createRegistration = async function (req) {
  return await reservationData.createReservation(req.body.id_class, req.body.id_customer);
}