const { Country, Activity } = require('../db');

const getCountryById = async (req, res) => {
    let { id } = req.params;
    console.log(id);
    try {
        const response = await Country.findOne({
            where: {
                id: id.toUpperCase()
            },
            include: [
                {
                    model: Activity
                }
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: 'No hay ningun pais con ese id' });
    }
};

module.exports = getCountryById;
