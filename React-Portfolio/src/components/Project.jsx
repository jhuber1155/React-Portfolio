import Card from 'react-bootstrap/Card';

function Project({ title, text }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;