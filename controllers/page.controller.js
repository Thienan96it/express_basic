const db = require('../models');
const Country = db.Country;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

};

exports.findAll = async (req, res) => {
    try {   
        let contries = await Country.findAll()
            console.log(contries)
            return res.render('index', { title: "Index.html", data: contries });
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
