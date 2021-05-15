const PERSONEL = 'Personal';
const CUSTOMER = 'Socio';

exports.getAllStaff = () => `SELECT * FROM ${PERSONEL};`;
exports.lookStaff = (email, password) => `SELECT * FROM ${PERSONEL} WHERE correo='${email}' AND \`contraseña\`='${password}';`;
exports.emailInStaff = (email) => `SELECT * FROM ${PERSONEL} WHERE correo='${email}';`;
exports.registerStaff = (name, dni, phone, password, address, email) => 
  `INSERT INTO ${PERSONEL} (nombre, dni, telefono, contraseña, domicilio, correo) 
  VALUES ('${name}', '${dni}', '${phone}', '${password}', '${address}', '${email}');`;
exports.getStaffById = (id_staff) => `SELECT * FROM ${PERSONEL} WHERE id_personal='${id_staff}';`;


exports.lookCustomer = (email, password) => `SELECT * FROM ${CUSTOMER} WHERE correo='${email}' AND \`contraseña\`='${password}';`;
exports.registerCustomer = (name, dni, phone, password, address, email, bankAccount, isPaymentOK) => 
  `INSERT INTO ${CUSTOMER} (nombre, dni, telefono, domicilio, correo, contraseña, cuenta_bancaria, corriente_de_pago) 
  VALUES ('${name}', '${dni}', '${phone}', '${address}', '${email}', '${password}', '${bankAccount}', '${isPaymentOK}');`;
