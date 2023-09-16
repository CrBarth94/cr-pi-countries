import style from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { searchPais } from '../../redux/actions';

export default function SearchBar() {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const name = event.target.value;
        dispatch(searchPais(name));
    };

    return (
        <div>
            <input
                className={style.search}
                placeholder="Buscar Pais"
                onChange={handleChange}
            />
        </div>
    );
}
