/**
 * The UserController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const crypto = require("crypto");
const Controller = require("./Controller");
const service = require("../services/UserService");

const authSignupPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.authSignupPOST);
};

// generate random authentication token
function generateAuthToken() {
  const token = crypto.randomBytes(32).toString("hex");
  return token;
}

module.exports = {
  authSignupPOST,
};
