const CLASS = 'Clase';

exports.createClass = (id_staff, name, description, enter, exit, capacity) => 
`INSERT INTO ${CLASS} (id_personal, nombre, descripcion, horario_entrada, horario_salida, aforo) 
VALUES ('${id_staff}', '${name}', '${description}', '${enter}', '${exit}', '${capacity}');`;