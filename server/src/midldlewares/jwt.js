const jwt = require('jsonwebtoken');
require('dotenv').config();

class Auth {
  static GerarToken(email, roles) {
    return jwt.sign({ email, roles }, process.env.SECRET, { expiresIn: process.env.EXPIRESIN });
  }

  static Validade(req, res, next) {
    const { token } = req.body;
    try {
      const { roles } = jwt.verify(token, process.env.SECRET);
      req.headers.authorization = roles;
      return next();
    } catch (error) {
      return res.status(400).json({ message: 'Usuario não tem permisão.' });
    }
  }

  static RolesADMIN(req, res, next) {
    const roles = req.headers.authorization;
    if (roles === process.env.administrador) return next();
    return res.status(400).json({ message: 'usuario não tem acesso de administrador' });
  }
}

module.exports = { jwt, Auth };
