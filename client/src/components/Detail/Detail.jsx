import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './Detail.module.css';
import ActivityCard from '../ActivityCards/ActivityCards';

export default function Detail() {
    const [pais, setPais] = useState({});
    const { id } = useParams();

    const detallePais = async () => {
        try {
            const { data } = await axios.get(
                `https://countries-server-eswm.onrender.com/countries/${id}`
            );
            console.log('detalle', data);
            if (data.id) {
                setPais(data);
            }
        } catch (error) {
            window.alert('No se encontraron paises');
        }
    };
    useEffect(() => {
        detallePais();
    }, []);

    return (
        <div className={style.detail}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>
                        {pais.name} {pais.id}
                    </h2>
                </div>
                <div className={style.flag_det}>
                    <div>
                        <img src={pais.bandera} />
                    </div>
                    <div className={style.detalles}>
                        <h4>Continente: {pais.continente}</h4>
                        <h4>Capital: {pais.capital}</h4>
                        <h4>Subregion: {pais.subregion}</h4>
                        <h4>Area: {pais.area}km²</h4>
                        <h4>Poblacion: {pais.poblacion}</h4>
                    </div>
                </div>
                <div>
                    <h2 className={style.title}>Actividades:</h2>
                </div>
            </div>
            <div className={style.actividades}>
                {pais.Activities && pais.Activities.length > 0 ? (
                    pais.Activities.map((activities) => (
                        <ActivityCard
                            name={activities.name}
                            duration={activities.duracion}
                            dificulty={activities.dificultad}
                            seasson={activities.temporada}
                        />
                    ))
                ) : (
                    <h4 className={style.error}>
                        El pais no tiene actividades
                    </h4>
                )}
            </div>
        </div>
    );
}
