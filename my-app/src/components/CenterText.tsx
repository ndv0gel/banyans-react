import { Container, Row, Col } from 'react-bootstrap';

export default function CenterText() {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="text-white display-4 fw-bold">GLOBALLY INSPIRED, LOCALLY</h1>
            <h1 className="text-white display-4 fw-bold">SOURCED</h1>
            <h3 className="text-white mt-3">KAILUAS CRAFT KITCHEN AND LOUNGE</h3>
            <h3 className="text-white">Live Music Fridays and Saturdays</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}