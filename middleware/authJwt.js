const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require('../models');
const User = db.user;

verifyToken = (req, res, next) => {
    const authHeader = req.headers.get('Authorization');
    let token = authHeader && authHeader.split(' ')[1];

    if (token == null)
        return res.sendStatus(401);

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err)
            return res.sendStatus(401).send({
                message: 'Unauthorization'
            });
        req.userId = decoded.id;
    })
};

const authJwt = {
    verifyToken: verifyToken
}

module.exports = authJwt;