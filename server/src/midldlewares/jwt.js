const jwt = require('jsonwebtoken');
require('dotenv').config();

class Auth {
  static GerarToken(email) {
    console.log('passando', email);
    const Token = jwt.sign('email', 'secret', 99999999999);
    console.log('token');
    return Token;
  }
}

module.exports = { jwt, Auth };
