import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import {
    filtrarContinente,
    ordenarNombre,
    ordenarPoblacion,
    getPaises,
    getActividades,
    filtActividad
} from '../../redux/actions';
import { useEffect, useState } from 'react';
import style from './Cards.module.css';

export default function Cards() {
    let paises = useSelector((state) => state.myPaises);
    let allActividades = useSelector((state) => state.todasActividades);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(paises.length / itemsPerPage);

    const dispatch = useDispatch();

    function handleFilter(event) {
        if (event.target.value === 'Continente') {
            dispatch(getPaises());
        }
        dispatch(filtrarContinente(event.target.value));
    }
    function handleSortByPoblacion(event) {
        dispatch(ordenarPoblacion(event.target.value));
    }
    function handleSortByName(event) {
        dispatch(ordenarNombre(event.target.value));
    }
    useEffect(() => {
        dispatch(getActividades());
    }, []);

    function handleFilterActividades(event) {
        dispatch(filtActividad(event.target.value));
    }

    useEffect(() => {
        dispatch(getPaises());
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const countriesToShow = paises.slice(startIndex, endIndex);

    return (
        <div className={style.home}>
            <div>
                <select className={style.select} onChange={handleFilter}>
                    {[
                        'Continente',
                        'Africa',
                        'Europe',
                        'Oceania',
                        'Asia',
                        'South America',
                        'North America',
                        'Antarctica'
                    ].map((continente) => (
                        <option value={continente}>{continente}</option>
                    ))}
                </select>
                <select
                    className={style.select}
                    onChange={handleFilterActividades}
                >
                    <option>Actividades</option>
                    {allActividades.map((actividad) => (
                        <option value={actividad.id}>{actividad.name}</option>
                    ))}
                </select>
                <select
                    className={style.select}
                    onChange={handleSortByPoblacion}
                >
                    {['Poblacion', 'Ascendente', 'Descendente'].map((order) => (
                        <option value={order}>{order}</option>
                    ))}
                </select>
                <select className={style.select} onChange={handleSortByName}>
                    {['Alfabeticamente', 'A-Z', 'Z-A'].map((order) => (
                        <option value={order}>{order}</option>
                    ))}
                </select>
            </div>
            <div>
                <button
                    className={style.boton}
                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                {currentPage}-{totalPages}
                <button
                    className={style.boton}
                    onClick={() =>
                        setCurrentPage(Math.min(currentPage + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
            <div className={style.cards}>
                {countriesToShow.map((pais) => (
                    <Card
                        key={pais.id}
                        id={pais.id}
                        flag={pais.bandera}
                        name={pais.name}
                        continente={pais.continente}
                        poblacion={pais.poblacion}
                    />
                ))}
            </div>
        </div>
    );
}
