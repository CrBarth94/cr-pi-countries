const axios = require('axios');
const fs = require('fs');
const server = require('./src/server');
const { conn, Country } = require('./src/db.js');
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

async function cargarPaises() {
    try {
        const jsonData = fs.readFileSync('db.json', 'utf8');
        const countries = JSON.parse(jsonData);

        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            await Country.create({
                name: country.name.common,
                id: country.cca3,
                bandera: country.flags.png,
                continente: country.continents.join(' '),
                capital: country.capital
                    ? country.capital.join(' ')
                    : 'No tiene capital',
                subregion: country.subregion
                    ? country.subregion
                    : 'No tiene subregion',
                area: country.area,
                poblacion: country.population
            });
        }

        console.log('Países cargados exitosamente.');
    } catch (error) {
        console.error('Error al cargar países:', error);
    }
}

conn.sync({ force: false })
    .then(async () => {
        await cargarPaises();
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((error) => console.error(error));
