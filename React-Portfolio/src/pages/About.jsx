import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function About() {
    return (
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src='../../assets/images/profilePicture.jpg' roundedCircle />
        </Col>
      </Row>
        <div className = "container pt-4">
        <p> Words go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about meWords go here about me </p>
        </div>
        </Container>
  );
}