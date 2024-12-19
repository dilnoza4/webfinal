import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarsNewerThan } from '../services/api';
import CarCard from '../components/CarCard/CarCard';

function CarsNewerThan({ setLoading, setError }) {
    const [cars, setCars] = useState([]);
    const { year } = useParams();

    useEffect(() => {
        const loadCars = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchCarsNewerThan(year);
                setCars(data.cars || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCars();
    }, [year, setLoading, setError]);

    return (
        <div>
            <h1 className="page-title">Cars Newer than {year}</h1>
            <div className="cars-grid">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default CarsNewerThan;