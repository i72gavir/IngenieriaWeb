const general = require('./general');
const classQueries = require('../queries/classQueries');

exports.createClass = async function (id_staff, name, description, enter, exit, capacity) {
  return general.doSimpleQuery(classQueries.createClass(id_staff, name, description, enter, exit, capacity));
}