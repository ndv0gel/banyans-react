import { Container, Row, Col } from 'react-bootstrap';

export default function BottomFooter() {
  return (
    <footer className="mt-auto" style={{ backgroundColor: '#1c1c1c', color: '#fafafa' }}>
      <Container>
        <Row className="align-items-start">
          <Col md={4} xs={12}>
            <h3>LOCATION</h3>
            <strong>KAILUA</strong><br />
            32 Malinu Ave, Kailua, HI 96734<br />
            (808) 261-6733
          </Col>
          
          <Col md={4} xs={12}>
            <h3>BUSINESS HOURS</h3>
            <strong>Mondays, Wednesdays, Thursdays</strong><br />
            OPEN 4pm - 10pm<br />
            Happy Hour 4pm - 6pm<br />
            Dinner 4pm - 9pm<br />
            <strong>Fridays</strong><br />
            OPEN 4pm - 11pm<br />
            Happy Hour 4pm - 6pm<br />
            Dinner 4pm - 10pm<br />
            <strong>Saturdays</strong><br />
            OPEN 9am - 11pm<br />
            Brunch 9am - 1pm<br />
            Happy Hour 4pm - 6pm<br />
            Dinner 4pm - 10pm
          </Col>
          
          <Col md={4} xs={12}>
            <h3>SUBSCRIBE</h3>
            <input type="text" className="form-control" placeholder="First Name" />
            <input type="text" className="form-control" placeholder="Last Name" />
            <input type="text" className="form-control" placeholder="Email Address" />
            <button className="btn btn-primary">Sign Up</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}