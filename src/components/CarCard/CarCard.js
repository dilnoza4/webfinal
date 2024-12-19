import { Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';

function CarCard({ car }) {
    return (
        <Card className="h-100 shadow-sm hover-shadow">
            <Card.Header className="bg-dark text-white">
                <Card.Title className="mb-0">{car.car}</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
                <Card.Text as="div">
                    <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted">Brand</span>
                            <span className="fw-semibold">{car.car_model}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted">Year</span>
                            <Badge bg="secondary">{car.car_model_year}</Badge>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted">Color</span>
                            <Badge
                                style={{
                                    backgroundColor: car.car_color,
                                    color: isLightColor(car.car_color) ? 'black' : 'white'
                                }}
                            >
                                {car.car_color}
                            </Badge>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">Price</span>
                            <span className="fw-bold text-success">${car.price}</span>
                        </div>
                    </div>
                </Card.Text>
                <Button
                    as={Link}
                    to={`/cars/${car.id}`}
                    variant="outline-primary"
                    className="mt-auto w-100"
                >
                    View Details
                </Button>
            </Card.Body>
        </Card>
    );
}

// Helper function to determine if a color is light
function isLightColor(color) {
    const lightColors = ['yellow', 'white', 'silver', 'beige', 'light'];
    return lightColors.some(light => color.toLowerCase().includes(light));
}

export default CarCard;