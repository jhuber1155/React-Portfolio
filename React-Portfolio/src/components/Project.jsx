import Card from 'react-bootstrap/Card';
import * as projects from "../assets"
import '../assets/css/project.css'

function Project({ project, className }) {
  const { title, text, repo, name } = project;

  return (
    <Card key={title} className={`bg-dark text-white ${className}`}>
      <div>
      <Card.Img src={projects[title]} alt="Card image" className="project-image" />
      </div>
      <div>
      <Card.Title className="card-title">{name}   
      </Card.Title>
      <Card.Text>
          {text}
        </Card.Text>
        <Card.Link href={repo}>
          github:
          <i className="fab fa-github github-icon" />
        </Card.Link>
        
        </div>
    </Card>
  );
}

export default Project;
