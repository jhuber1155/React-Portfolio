import Card from 'react-bootstrap/Card';
import * as projects from "../assets"
import '../assets/css/project.css'

function Project({ project }) {
    const {title, text, repo } = project
  return (
    <Card key={title} className="bg-dark text-white">
      <Card.Img src={projects[title]} alt="Card image" className="project-image"/>
      <Card.ImgOverlay>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
          {text}
        </Card.Text>
        <a href={repo}>
            <i className="fab fa-github github-icon" />
        </a>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Project;