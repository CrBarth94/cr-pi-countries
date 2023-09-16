const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        'Country',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            id: {
                type: DataTypes.STRING,
                validate: {
                    isAbbreviation(value) {
                        if (value && value.length > 3) {
                            throw new Error(
                                'La abreviatura del país debe tener como máximo 3 letras.'
                            );
                        }
                    }
                }
            },
            bandera: {
                type: DataTypes.STRING,
                allowNull: false
            },
            continente: {
                type: DataTypes.STRING,
                allowNull: false
            },
            capital: {
                type: DataTypes.STRING,
                allowNull: true
            },
            subregion: {
                type: DataTypes.STRING,
                allowNull: false
            },
            area: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            poblacion: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false // Desactivar timestamps
        }
    );
};
