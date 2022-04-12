const db = require('../models');
const User = db.User;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

};

exports.findAll = async (req, res) => {
    try {   
        let data = await User.findAll()
        return res.send(JSON.stringify(data))
    }catch (err) {
        console.log(err);
    }
};

exports.findOne = (req, res) => {
    
};

exports.update = (req, res) => {
    
};

exports.delete = (req, res) => {
    
};

exports.deleteAll = (req, res) => {
    
};

exports.fineAllPublic = (req, res) => {
    
};
