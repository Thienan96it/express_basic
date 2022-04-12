const db = require('../models');
const Country = db.Country;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

};

exports.findAll = async (req, res) => {
    try {   
        let countries = await Country.findAll()
        console.log(help);
        return res.render('index', { data: countries });
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
