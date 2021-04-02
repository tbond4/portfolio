import { Card } from "react-bootstrap";
import self from "../images/self.png"


function SelfPic(){

    return(
//         <Card style={{ width: '18rem',borderColor:"#6b5ebf" ,height:"fit-content"}}>
//   <Card.Img variant="top" src={self} style={{objectFit:"cover",height:"fit-content",padding:"0"}} />
//   <Card.Body style={{backgroundColor:"#5d88ba",color:"white"}}>
//     <Card.Text >
//       <a href="https://www.instagram.com/tristan__bond/"> Personal Instagram</a>
//       <br/>
//       <a href="https://www.instagram.com/tristanbondphotography/"> Photography Instagram</a>
//     </Card.Text>
//   </Card.Body>
// </Card>
<div style={{backgroundColor:"#5d88ba",color:"white"}}>
    <img src={self} alt="site author"/>
    <a href="https://www.instagram.com/tristan__bond/"> Personal Instagram</a>
      <br/>
      <a href="https://www.instagram.com/tristanbondphotography/"> Photography Instagram</a>
</div>
    );

}

export default SelfPic