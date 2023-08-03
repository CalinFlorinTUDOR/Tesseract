const jwt = require('jsonwebtoken');
const secretKeyJWT = 'xcjhk243545fghjyASRTJ';

const authJWT = ( req, res, next) => {
  const token = req.headers['Authorization'];

  if(!token) {
    return res.status(401).json({ err: 'Unauthorized: No provided token '});
  }

  jwt.verify(token, secretKeyJWT, (err, user) => {
    if (err) {
      return res.status(403).json({ err: 'Unauthorized: Invalid provided token '});
    }
    req.user = user;
    next();
  })
};

module.exports = authJWT;