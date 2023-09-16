const { Activity, Country } = require('../db');

const getActivities = async (req, res) => {
    try {
        const response = await Activity.findAll({
            include: [
                {
                    model: Country
                }
            ]
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getActivities;
