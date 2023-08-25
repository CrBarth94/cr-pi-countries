const {Activity}=require("../db")

const getActivities= async(req,res)=>{
    try {
        const response= await Activity.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = getActivities;