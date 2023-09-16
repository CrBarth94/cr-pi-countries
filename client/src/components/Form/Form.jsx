import { useEffect, useState } from 'react';
import validation from '../validation';
import axios from 'axios';
import style from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPaises } from '../../redux/actions';

export default function Landing() {
    const [actividad, setActividad] = useState({
        name: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        paises: []
    });
    const [errors, setErrors] = useState({});
    const [seleccionados, setSeleccionados] = useState([]);
    const allPaises = useSelector((state) => state.myPaises);
    const dispatch = useDispatch();

    const handleTemporada = (event) => {
        setActividad((prevActividad) => ({
            ...prevActividad,
            temporada: event.target.value
        }));
        console.log(actividad.temporada);
    };

    const handleChange = (event) => {
        const propiedad = event.target.name;
        const valor = event.target.value;
        setActividad({ ...actividad, [propiedad]: valor });
        validation({ ...actividad, [propiedad]: valor }, errors, setErrors);
        console.log(actividad);
    };

    useEffect(() => {
        dispatch(getPaises());
    }, []);

    const handlePais = async (event) => {
        setActividad({
            ...actividad,
            paises: [...actividad.paises, event.target.value]
        });
        const { data } = await axios.get(
            `http://localhost:3001/countries/name?name=${event.target.value}`
        );
        setSeleccionados([...seleccionados, data]);
        console.log('handlepais', seleccionados);
    };
    const submitHandler = async (event) => {
        console.log(actividad);
        if (Object.values(actividad).every((value) => value)) {
            try {
                const response = await axios.post(
                    'http://localhost:3001/activities',
                    actividad
                );
            } catch (error) {
                console.log('error al enviar la actividad');
            }
        }
    };
    const onClose = (event) => {
        setSeleccionados(seleccionados.filter((pais) => pais.name !== event));
        setActividad({
            ...actividad,
            paises: actividad.paises.filter((pais) => pais !== event)
        });
        console.log('close', actividad, seleccionados);
        return seleccionados;
    };

    return (
        <div className={style.page}>
            <form className={style.container}>
                <div>
                    <label htmlFor="name">Nombre </label>
                    <input
                        className={style.input}
                        type="name"
                        name="name"
                        value={actividad.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="dificultad">Dificultad </label>
                    <input
                        className={style.input}
                        type="number"
                        min={1}
                        max={5}
                        name="dificultad"
                        value={Number(actividad.dificultad)}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="duracion">Duracion </label>
                    <input
                        className={style.input}
                        type="range"
                        min={1}
                        max={12}
                        name="duracion"
                        value={Number(actividad.duracion)}
                        onChange={handleChange}
                    />
                    <span>{actividad.duracion} horas</span>
                </div>
                <div>
                    Temporada
                    <select
                        className={style.select}
                        placeholder="temporada"
                        onChange={handleTemporada}
                    >
                        {[
                            'Temporada',
                            'Invierno',
                            'Primavera',
                            'Verano',
                            'Otoño'
                        ].map((temporada) => (
                            <option value={temporada}>{temporada}</option>
                        ))}
                    </select>
                </div>
                <div>
                    Paises
                    <select
                        className={style.select}
                        placeholder="temporada"
                        onChange={handlePais}
                    >
                        {allPaises.map((pais) => (
                            <option value={pais.name}>{pais.name}</option>
                        ))}
                    </select>
                </div>
                <div className={style.flags}>
                    {seleccionados.map((pais) => (
                        <div>
                            <button
                                className={style.btn}
                                onClick={(event) => {
                                    event.preventDefault();
                                    onClose(pais.name);
                                }}
                            >
                                {' '}
                                <img
                                    src={pais.bandera}
                                    className={style.img}
                                />{' '}
                            </button>
                        </div>
                    ))}
                </div>
                <div className={style.error}>{errors.error}</div>
                {errors.error === '' &&
                    actividad.paises.length !== 0 &&
                    actividad.temporada !== '' && (
                        <button onClick={submitHandler}>Submit</button>
                    )}
            </form>
        </div>
    );
}
