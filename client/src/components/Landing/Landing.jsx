import { NavLink } from 'react-router-dom';
import style from './Landing.module.css';

export default function Landing() {
    return (
        <div className={style.landing}>
            <div className={style.info}>
                <h1>Bienvenido</h1>
                <h3>
                    La funcion de esta aplicacion es mostrar los paises del
                    mundo y administrar sus actividades
                </h3>
                <p>
                    <NavLink to="/home">
                        <button className={style.boton}>Ingresar</button>
                    </NavLink>
                </p>
            </div>
            <div className={style.image}>
                <img src="https://i.imgur.com/7TdMTgl.png" alt="landing" />
            </div>
        </div>
    );
}
