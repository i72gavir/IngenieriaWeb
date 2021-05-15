const userData = require('../data/connections/userConnection');

const loginStaff = async function (email, password) {
  const res = await userData.lookStaff(email, password);
  return res;
}

const loginCustomer = async function (email, password) {
  const res = await userData.lookCustomer(email, password);
  return res;
}

exports.login = async function (req) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  const resultStaff = await loginStaff(email, password);
  if (resultStaff.length != 0) {
    return {
      status: true,
      type: "staff",
      data: resultStaff[0]
    };
  }

  const resultCustomer = await loginCustomer(email, password);
  if (resultCustomer.length != 0) {
    return {
      status: true,
      type: "customer",
      data: resultCustomer[0]
    };
  }

  return {
    status: false,
    message: "Email or password are wrong"
  };;
}

exports.createCustomer = async function (name, dni, phone, password, address, email, bankAccount, isPaymentOK) {
  return await userData.registerCustomer(name, dni, phone, password, address, email, bankAccount, isPaymentOK);
}