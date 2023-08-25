const { Sequelize } = require("sequelize");
const {Country}=require("../db")

const getCountryByName= async(req,res)=>{
    let {name}=req.query;
    console.log(name);
    try {
        const response= await Country.findOne({where: { name :{
            [Sequelize.Op.iLike]:name
            }}
        });
        if(response){
            res.status(200).json(response)
        }
        res.status(400).send("No hay pais con ese nombre")
    } catch (error) {
        res.status(500)
    }
}

module.exports = getCountryByName;