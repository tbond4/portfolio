import { Container, Jumbotron } from "react-bootstrap";
import HeaderPic from "../images/homePic.jpg"
function Header(){
return(
 
    <Jumbotron fluid style={{backgroundImage:`url(${HeaderPic})`, backgroundSize:"cover", backgroundPosition:"center",marginBottom:"0"}}>
    <Container style={{color:"white"}}>
      <h1 style={{fontStyle:"bold", fontSize:"4em"}}>Tristan Bond </h1>
      <p style={{fontStyle:"italic"}}>
      Memento Mori
      </p>
    </Container>
  </Jumbotron>
);
}

export default Header;