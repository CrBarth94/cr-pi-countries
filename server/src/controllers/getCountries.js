const {Country}=require("../db")

const getCountries= async(req,res)=>{
    try {
        const response= await Country.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getCountries;