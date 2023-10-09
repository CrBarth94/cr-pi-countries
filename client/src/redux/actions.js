import axios from 'axios';
export const CONT_FILT = 'CONT_FILT';
export const SRCH_PAIS = 'SRCH_PAIS';
export const ORDER = 'ORDER';
export const ACT_FILT = 'ACT_FILT';
export const ORDER_NAME = 'ORDER_NAME';
export const ALL_PAISES = 'ALL_PAISES';
export const ACTIVIDADES = 'ACTIVIDADES';
export const DEL_ACT = 'DEL_ACT';

export const getPaises = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://countries-server-eswm.onrender.com/countries`
            );
            dispatch({
                type: ALL_PAISES,
                payload: data
            });
        } catch (error) {
            console.error(`Error al agregar todos los paises`, error);
        }
    };
};

export const getActividades = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://countries-server-eswm.onrender.com/activities`
            );
            dispatch({
                type: ACTIVIDADES,
                payload: data
            });
        } catch (error) {
            console.error(`Error al agregar todas las actividades`, error);
        }
    };
};
export const searchPais = (name) => {
    return {
        type: SRCH_PAIS,
        payload: name
    };
};

export const filtrarContinente = (continente) => {
    return {
        type: CONT_FILT,
        payload: continente
    };
};

export const ordenarPoblacion = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};
export const filtActividad = (id) => {
    return {
        type: ACT_FILT,
        payload: id
    };
};

export const ordenarNombre = (order) => {
    return {
        type: ORDER_NAME,
        payload: order
    };
};

export const deletActivitie = (name) => {
    return {
        type: DEL_ACT,
        payload: name
    };
};
