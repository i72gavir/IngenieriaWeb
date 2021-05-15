const userData = require('../data/connections/user');

exports.loginStaff = async function (email, password) {
  const res = await userData.lookStaff(email, password);
  return res;
}