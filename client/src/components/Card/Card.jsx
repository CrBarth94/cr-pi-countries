import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({ id, flag, name, continente, poblacion }) {
    return (
        <div className={style.card}>
            <NavLink to={`/detail/${id}`}>
                <img src={flag} className={style.img} />
                <h2 className={style.txt}>{name}</h2>
                <h2 className={style.txt}>{continente}</h2>
            </NavLink>
        </div>
    );
}
