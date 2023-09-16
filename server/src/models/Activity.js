const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Activity',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            dificultad: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isDificultad(value) {
                        if (value > 5 || value < 1) {
                            throw new Error(
                                'El valor de la dificultad debe estar en 1 y 5.'
                            );
                        }
                    }
                }
            },
            duracion: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            temporada: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
};
