const RESERVATION = 'ReservaClase';


exports.createReservation = (id_class, id_customer) => 
`INSERT INTO ${RESERVATION} (id_clase, id_socio) 
VALUES ('${id_class}', '${id_customer}');`;

exports.getReservationsById = (id_customer) => `SELECT * FROM ${RESERVATION} WHERE id_socio = '${id_customer}';`;