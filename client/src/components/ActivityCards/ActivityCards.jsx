import style from './ActivityCards.module.css';

export default function ActivityCards({ name, duration, dificulty, seasson }) {
    return (
        <div className={style.card}>
            <h3 className={style.txt}>{name}</h3>
            <h3 className={style.txt}>Duracion: {duration}Hs</h3>
            <h3 className={style.txt}>Dificultad: {dificulty}/5</h3>
            <h3 className={style.txt}>Temporada: {seasson}</h3>
        </div>
    );
}
