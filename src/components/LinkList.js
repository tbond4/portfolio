import techResume from "../images/TristanBondTechnicalResume.pdf";
import resume from "../images/TristanBondResume.pdf";
import { ListGroup } from "react-bootstrap";
function LinkList(){

    return(

      <ListGroup >
      <ListGroup.Item action href="https://www.linkedin.com/in/tristanbond/">
        LinkedIn
      </ListGroup.Item>
      <ListGroup.Item action href="https://github.com/tbond4" >
        Github
      </ListGroup.Item>
      <ListGroup.Item action href="mailto:tristanebond@gmail.com">
        Email
      </ListGroup.Item>
      <ListGroup.Item action href={techResume}>
        Technical Resume
      </ListGroup.Item>
      <ListGroup.Item action href={resume}>
       Resume
      </ListGroup.Item>
    </ListGroup>
  );
}

export default LinkList;