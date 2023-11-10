import Card from 'react-bootstrap/Card';
import * as projects from "../assets"

function Project({ project }) {
    const {title, text, repo } = project
  return (
    <Card key={title} className="bg-dark text-white">
      <Card.Img src={projects[title]} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <a href={repo}>
            <i className="fab fa-github" />
        </a>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;