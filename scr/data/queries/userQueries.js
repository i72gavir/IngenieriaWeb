const PERSONEL = 'Personal';

exports.getAllStaff = () => `SELECT * FROM ${PERSONEL};`;
exports.lookStaff = (email, password) => `SELECT * FROM ${PERSONEL} WHERE correo='${email}' AND \`contraseña\`='${password}';`;
exports.emailInStaff = (email) => `SELECT * FROM ${PERSONEL} WHERE correo='${email}';`;
exports.registerStaff = (name, dni, phone, password, address, email) => 
  `INSERT INTO ${PERSONEL} (nombre, dni, telefono, contraseña, domicilio, correo) 
  VALUES ('${name}', '${dni}', '${phone}', '${password}', '${address}', '${email}');`;
exports.getStaffById = (id_staff) => `SELECT * FROM ${PERSONEL} WHERE id_personal='${id_staff}';`;

