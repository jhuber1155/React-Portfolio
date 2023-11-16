import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import profilePicture from '../assets/images/profilePicture.jpg'

export default function About() {
    return (
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={profilePicture} roundedCircle style={{ width: '170px', height: '160px', marginTop: '150px' }}/>
        </Col>
      </Row>
        <div className = "container pt-4">
        <p style={{ whiteSpace: 'pre-line' }}> I am a recent graduate of the UCLA Full-Stack Development Bootcamp! I have learned quite a bit from this bootcamp and will continue to keep learning on my journey! I am hoping to work with technology involving Artificial Intelligence as a underlying foundation to my coding/programming future. This bootcamp has taught me many hard skills which I can take with me anywhere I go in my career. If you click on the Resume button on the navigation bar, you will see that I have learned key front-end coding which includes HMTL, CSS, and JavaScript designed with the end user experience in mind. I have also learned how to apply my knowledge of back-end/server-side coding with database management using programs like MySQL and MongoDB, as well as how to connect front-end and back-end with API calls through programs like Insomnia and GraphQL.
        {'\n'}
        {'\n'}
        I have learned a lot on my journey so far, and I have a lot to learn yet. I am optimistic that I can continue to grow and learn with this emerging technology as I hone my craft with more languages, syntax, and understanding of how coding and the programming world operate in tandem. I have a creative background in the film and television industry and I hope to put that creativity and abstract thinking to accentuate the possibilities that coding can offer the everyday consumer and user. There is a virtual untapped and limitless market for those who go forth and seek it, and I hope to make my mark in that new frontier!
        </p>
        </div>
        </Container>
  );
}