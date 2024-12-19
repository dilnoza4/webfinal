import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchCarsByYear } from '../services/api';
import CarCard from '../components/CarCard/CarCard';
import NoResults from '../pages/NoResults';

function CarsByYear({ setLoading, setError }) {
    const [cars, setCars] = useState([]);
    const { year } = useParams();
    const [minYear, maxYear] = year.split('-');

    useEffect(() => {
        const loadCars = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchCarsByYear(year);
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
        <Container className="py-4">
            <h1 className="page-title">Cars from {minYear} to {maxYear}</h1>
            {cars.length > 0 ? (
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {cars.map(car => (
                        <Col key={car.id}>
                            <CarCard car={car} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <NoResults type="year range" value={`${minYear}-${maxYear}`} />
            )}
        </Container>
    );
}

export default CarsByYear;