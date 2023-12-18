import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CardPage from './pages/CardPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/CardPage' element={<CardPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
