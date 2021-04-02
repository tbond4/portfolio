import techResume from "../images/TristanBondTechnicalResume.pdf";
import resume from "../images/TristanBondResume.pdf";
import { ListGroup } from "react-bootstrap";
function LinkList(){

    return(

      <ListGroup style={{marginTop:"1%"}} >
      <ListGroup.Item style={{backgroundColor:"#5d88ba",color:"white",borderColor:"#735170"}} action href="https://www.linkedin.com/in/tristanbond/">
        LinkedIn
      </ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"#5d88ba",color:"white",borderColor:"#735170"}}action href="https://github.com/tbond4" >
        Github
      </ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"#5d88ba",color:"white",borderColor:"#735170"}}action href="mailto:tristanebond@gmail.com">
        Email
      </ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"#5d88ba",color:"white",borderColor:"#735170"}}action href={techResume}>
        Technical Resume
      </ListGroup.Item>
      <ListGroup.Item style={{backgroundColor:"#5d88ba",color:"white",borderColor:"#735170"}}action href={resume}>
       Resume
      </ListGroup.Item>
    </ListGroup>
  );
}

export default LinkList;