import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../services/api';

function CarDetails({ setLoading, setError }) {
    const [car, setCar] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const loadCar = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchCarById(id);
                setCar(data.car);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCar();
    }, [id, setLoading, setError]);

    if (!car) return null;

    return (
        <div className="car-details">
            <h1 className="page-title">{car.car}</h1>
            <div className="car-info">
                <p><strong>Model:</strong> {car.car_model}</p>
                <p><strong>Year:</strong> {car.car_model_year}</p>
                <p><strong>Color:</strong> {car.car_color}</p>
                <p><strong>Price:</strong> ${car.price}</p>
                <p><strong>Availability:</strong> {car.availability ? 'In Stock' : 'Out of Stock'}</p>
            </div>
        </div>
    );
}

export default CarDetails;