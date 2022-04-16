const jwt = require('jsonwebtoken');
require('dotenv').config();
const ConnectionDb = require('../modules/administrador/model-registro');

class Auth {
  static GerarToken(email, roles) {
    return jwt.sign({ email, roles }, process.env.SECRET, { expiresIn: process.env.EXPIRESIN });
  }

  static ValidadeAD(req, res, next) {
    const Token = req.headers['x-custom-header'];
    if (!Token) {
      return res.status(401).json({ message: 'Token não informado.' });
    }
    try {
      const { upn } = jwt.verify(Token, process.env.SECRET);
      req.body.emailToken = upn;
      return next();
    } catch (error) {
      console.log(error)
      return res.status(401).json({ message: 'Usuario não tem permisão.' });
    }
  }

  static async ValidadeADadmin(req, res, next) {
    const Token = req.headers['x-custom-header'];
    console.log(Token)
    if (!Token) {
      return res.status(401).json({ message: 'Token não informado.' });
    }
    try {
      console.log(Token)
      const { upn } = jwt.verify(Token, process.env.SECRET);
      console.log(upn)
      const valido = await ConnectionDb.LoginPorEmail(upn);
      if (valido instanceof Error) {
        return res.status(401).json({ message: 'Usuario não tem permisão de admin.' });
      }
      req.body.email = upn;
      req.body.role = valido.role;
      return next();
    } catch (error) {
      console.log(error)
      return res.status(401).json({ message: 'Sua sessão expirou.' });
    }
  }
}

module.exports = { jwt, Auth };
