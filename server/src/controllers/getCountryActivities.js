const {Activity}=require("../db")

const getCountryActivity= async(req,res)=>{
    try {
        const response= await CountryActivitys.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:"error.message"})
    }
}

module.exports = getCountryActivity;