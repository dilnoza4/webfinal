import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchAllCars } from '../services/api';
import CarCard from '../components/CarCard/CarCard';

function AllCars({ setLoading, setError }) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const loadCars = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchAllCars();
                setCars(data.cars || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCars();
    }, [setLoading, setError]);

    return (
        <Container className="py-4">
            <h1 className="page-title">All Cars</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {cars.map(car => (
                    <Col key={car.id}>
                        <CarCard car={car} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllCars;