const { Activity } = require('../db');

const deletActivity = async (req, res) => {
    let { name } = req.params;
    try {
        const response = await Activity.destroy({ where: { name: name } });
    } catch (error) {
        res.status(400).json({ error: 'No se pudo borrar el pais' });
    }
};
