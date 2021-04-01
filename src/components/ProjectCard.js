import {Card, Button} from "react-bootstrap"

function ProjectCard({title, image, desc, link}){
    return(
    
      <Card style={{ width: '45rem',borderColor:"#6b5ebf",margin:"1%" }}>
      <Card.Img variant="top" src={image} style={{marginBottom:"0"}}/>
      <Card.Body style={{backgroundColor:"#5d88ba",color:"white"}}>
        <Card.Title style={{backgroundColor:"#6b5ebf",padding:"1%", width:"100%",color:"white"}}>{title}</Card.Title>
        <Card.Text >
          {desc}
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"#6b5ebf"}} href={link}>View</Button>
      </Card.Body>
    </Card>

    );
}

export default ProjectCard;