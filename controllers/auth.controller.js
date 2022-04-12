const config = require('../config/auth.config');
const db = require('../models');
const User = db.User;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    console.log(req.body)
    User.create({
        userName: userName,
        password: bcrypt.hashSync(password, salt)
    }).then(user => {
        res.send({
            message: 'success'
        })
    })
      .catch(err => {
          res.status(500), res.send({
              message: err.message
          })
      })
}

exports.login = (req, res) => {
    let userName = req.body.userName;
    let password = req.body.password;
    User.findOne({
        where: {
            userName: userName
        }
    })
    .then(user => {
        if (!user) {
            res.status(404).send({
                message: 'user not found'
            })
        }
        var passwordChecked = bcrypt.compareSync(password, user.password);
        if (!passwordChecked)
            return res.status(400).send({
                message: 'login failed'
            })
        var token = jwt.sign({id: user.id}, config.secret, {
            expiredIn: 86400,
        })
        return res.status(200).send({
            id: user.id,
            email: user.email,
            userName: user.userName,
            accessToken: token
        })
    })
    .catch (err => {
        return res.status(500).send({
            message: err.message
        })
    });
}