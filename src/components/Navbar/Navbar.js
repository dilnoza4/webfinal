import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, Form, InputGroup } from 'react-bootstrap';
import { YEAR_RANGES, COLORS, CAR_BRANDS } from '../constants/options';

function Navbar() {
    const navigate = useNavigate();

    const handleYearChange = (e) => {
        const [min, max] = e.target.value.split('-');
        navigate(`/cars/year/${min}-${max}`);
    };

    const handleColorChange = (e) => {
        navigate(`/cars/color/${e.target.value}`);
    };

    const handleBrandChange = (e) => {
        navigate(`/cars/brand/${e.target.value}`);
    };

    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="border-bottom border-light-subtle shadow">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold fs-4">
                    🚗 Car Catalog
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle />
                <BootstrapNavbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/cars" className="fw-semibold">All Cars</Nav.Link>
                    </Nav>
                    <Form className="d-flex gap-3">
                        <InputGroup>
                            <InputGroup.Text className="bg-secondary text-white">Color</InputGroup.Text>
                            <Form.Select onChange={handleColorChange} className="border-secondary">
                                <option value="" disabled selected>Choose Color</option>
                                {COLORS.map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </Form.Select>
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text className="bg-secondary text-white">Year</InputGroup.Text>
                            <Form.Select onChange={handleYearChange} className="border-secondary">
                                <option value="" disabled selected>Choose Year Range</option>
                                {YEAR_RANGES.map(range => (
                                    <option key={range.label} value={`${range.min}-${range.max}`}>
                                        {range.label}
                                    </option>
                                ))}
                            </Form.Select>
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text className="bg-secondary text-white">Brand</InputGroup.Text>
                            <Form.Select onChange={handleBrandChange} className="border-secondary">
                                <option value="" disabled selected>Choose Brand</option>
                                {CAR_BRANDS.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </Form.Select>
                        </InputGroup>
                    </Form>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;