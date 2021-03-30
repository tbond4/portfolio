import {Card, Button} from "react-bootstrap"

function ProjectCard({title, image, desc, link}){
    return(
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary" href={link}>View</Button>
      </Card.Body>
    </Card>

    );
}

export default ProjectCard;