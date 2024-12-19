import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AllCars from './pages/AllCars';
import CarsByColor from './pages/CarsByColor';
import CarsByYear from './pages/CarsByYear';
import CarsNewerThan from './pages/CarsNeweThan';
import CarDetails from './pages/CarDetails';
import CarsByBrand from './pages/CarsByBrand';
import './App.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    {loading && <div className="loading">Loading...</div>}
                    {error && <div className="error">{error}</div>}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/cars"
                            element={<AllCars setLoading={setLoading} setError={setError} />}
                        />
                        <Route
                            path="/cars/color/:color"
                            element={<CarsByColor setLoading={setLoading} setError={setError} />}
                        />
                        <Route
                            path="/cars/year/:year"
                            element={<CarsByYear setLoading={setLoading} setError={setError} />}
                        />
                        <Route
                            path="/cars/newer/:year"
                            element={<CarsNewerThan setLoading={setLoading} setError={setError} />}
                        />
                        <Route
                            path="/cars/brand/:brand"
                            element={<CarsByBrand setLoading={setLoading} setError={setError} />}
                        />
                        <Route
                            path="/cars/:id"
                            element={<CarDetails setLoading={setLoading} setError={setError} />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;