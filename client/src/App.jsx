import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './components/Landing/Landing';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Nav from './components/NavBar/NavBar';

function App() {
    const { pathname } = useLocation();

    return (
        <Provider store={store}>
            <>
                {pathname !== '/' && <Nav />}
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Cards />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </>
        </Provider>
    );
}

export default App;
