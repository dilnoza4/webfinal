import { Alert, Container } from 'react-bootstrap';

function NoResults({ type, value }) {
    return (
        <Container className="my-5">
            <Alert variant="info" className="text-center p-5 shadow-sm">
                <Alert.Heading className="display-6 mb-3">No Cars Found</Alert.Heading>
                <p className="lead mb-0">
                    Sorry, we couldn't find any cars {type && `with ${type}: `}
                    <strong>{value}</strong>
                </p>
            </Alert>
        </Container>
    );
}

export default NoResults;