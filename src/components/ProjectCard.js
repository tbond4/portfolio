import {Card, Button} from "react-bootstrap"

function ProjectCard({title, image, desc, link, codeLink}){
    return(
    
      <Card style={{ width: '45rem',borderColor:"#6b5ebf",margin:"1%", }}>
      <Card.Img variant="top" src={image} style={{marginBottom:"0"}}/>
      <Card.Body style={{backgroundColor:"#5d88ba",color:"white"}}>
        <Card.Title style={{textAlign:"center",padding:"1%", width:"100%",color:"white",}}>{title}</Card.Title>
        <Card.Text >
          {desc}
        </Card.Text>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <Button variant="primary" style={{backgroundColor:"#6b5ebf",borderRadius:"20px",width:"100px"}} href={link}>Deployed</Button>
        <Button variant="primary" style={{backgroundColor:"#6b5ebf",borderRadius:"20px",width:"100px"}} href={codeLink}>GitHub</Button>
        </div>
      </Card.Body>
    </Card>

    );
}

export default ProjectCard;