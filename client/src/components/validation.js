const validation = (actividad, errors, setErrors) => {
    if (!actividad.name) {
        setErrors({ ...errors, error: 'Completar este campo' });
    } else if (!/^[a-zA-Z]+$/.test(actividad.name)) {
        setErrors({ ...errors, error: 'No se aceptan numeros en este campo' });
    } else if (!Number(actividad.dificultad)) {
        setErrors({
            ...errors,
            error: 'La dificultad tiene que ser un numero'
        });
    } else if (actividad.dificultad < 1 || actividad.dificultad > 5) {
        setErrors({
            ...errors,
            error: 'La dificultad tiene que ser mayor a 0 y menor a 5'
        });
    } else if (!Number(actividad.duracion)) {
        setErrors({
            ...errors,
            error: 'Tiene que ingresar una duracion en horas'
        });
    } else if (actividad.duracion > 13) {
        setErrors({
            ...errors,
            error: 'La actividad no puede durar mas de 12Hs'
        });
    } else {
        setErrors({ ...errors, error: '' });
    }
};

export default validation;
