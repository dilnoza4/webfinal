import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchCarsByColor } from '../services/api';
import CarCard from '../components/CarCard/CarCard';
import NoResults from '../pages/NoResults';

function CarsByColor({ setLoading, setError }) {
    const [cars, setCars] = useState([]);
    const { color } = useParams();

    useEffect(() => {
        const loadCars = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchCarsByColor(color);
                setCars(data.cars || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCars();
    }, [color, setLoading, setError]);

    return (
        <Container className="py-4">
            <h1 className="page-title">{color} Cars</h1>
            {cars.length > 0 ? (
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {cars.map(car => (
                        <Col key={car.id}>
                            <CarCard car={car} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <NoResults type="color" value={color} />
            )}
        </Container>
    );
}

export default CarsByColor;