const CLASS = 'Clase';
const PERSONEL = 'Personal';
const RESERVATION = 'ReservaClase';

exports.createClass = (id_staff, name, description, enter, exit, capacity) => 
`INSERT INTO ${CLASS} (id_personal, nombre_clase, descripcion, horario_entrada, horario_salida, aforo) 
VALUES ('${id_staff}', '${name}', '${description}', '${enter}', '${exit}', '${capacity}');`;

exports.getClassInfo = (id_class) => 
`SELECT 
t1.id_clase,
t1.nombre_clase, 
t1.descripcion, 
t1.horario_entrada, 
t1.horario_salida, 
t1.aforo,
t2.id_personal,
t2.nombre 
FROM
${CLASS} t1
INNER JOIN 
${PERSONEL} t2 
ON t1.id_personal = t2.id_personal AND t1.id_clase='${id_class}';`;

exports.getAllClassInfo = () => 
`SELECT 
t1.id_clase,
t1.nombre_clase, 
t1.descripcion, 
t1.horario_entrada, 
t1.horario_salida, 
t1.aforo,
t2.id_personal,
t2.nombre 
FROM
${CLASS} t1
INNER JOIN 
${PERSONEL} t2 
ON t1.id_personal = t2.id_personal;`;

exports.getClassInfoByCustomer = (id_customer) => 
`SELECT 
t1.id_clase,
t1.nombre_clase, 
t1.descripcion, 
t1.horario_entrada, 
t1.horario_salida, 
t1.aforo,
t2.id_personal,
t2.nombre 
FROM ${CLASS} t1
INNER JOIN ${PERSONEL} t2 ON t1.id_personal = t2.id_personal 
INNER JOIN ${RESERVATION} t3 ON t1.id_clase = t3.id_clase AND t3.id_socio = '${id_customer}';`;