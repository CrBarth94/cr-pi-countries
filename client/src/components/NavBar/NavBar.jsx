import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar() {
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.imgcontainer}>
                    <NavLink to={'./home'}>
                        <img
                            src="https://i.imgur.com/5aptpyw.png"
                            alt="home"
                            className={style.img}
                        />
                    </NavLink>
                </div>
                <div className={style.searchbar}>
                    <SearchBar />
                </div>
                <div>
                    <NavLink to={'./form'}>
                        <button className={style.boton}>
                            Agregar Actividad
                        </button>
                    </NavLink>
                </div>
            </nav>
        </>
    );
}
