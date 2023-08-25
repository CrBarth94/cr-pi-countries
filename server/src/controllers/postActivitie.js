const { Activity, Country } = require("../db");

const postActivity = async (req, res) => {
  let actividad = req.body;
  console.log(actividad)
  try {
    if (!actividad.name || !actividad.dificultad || !actividad.duracion || !actividad.temporada) {
      res.status(404).json({ error: "Faltan datos para crear la actividad" });
    } else {
      const newActivity = await Activity.create(actividad);
      
      // Asociar la actividad con los países seleccionados
      if (actividad.paises && actividad.paises.length > 0) {
        const countries = await Country.findAll({ where: { name: actividad.paises } });
        await newActivity.setCountries(countries);
      }
      
      res.status(200).json({ message: "Actividad creada con éxito" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = postActivity;
