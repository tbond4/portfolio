import techResume from "../images/TristanBondTechnicalResume.pdf";
import resume from "../images/TristanBondResume.pdf";
function LinkList(){

    return(
    <div className="card col-3" style={{width: "18rem",color:"#7D6969",backgroundColor:"#3A3E40"}}>
        
    <ul className="list-group list-group-flush"style={{color:"#F0F1ED",backgroundColor:"#7D6969"}}>
      <li className="list-group-item"style={{color:"#F0F1ED",backgroundColor:"#7D6969"}}><a href="https://www.linkedin.com/in/tristanbond/" className="card-link"style={{color:"#F0F1ED"}}>LinkedIn</a></li>
      <li className="list-group-item"style={{color:"#F0F1ED",backgroundColor:"#7D6969"}}><a href="https://github.com/tbond4" className="card-link"style={{color:"#F0F1ED"}}>GitHub</a></li>
      <li className="list-group-item"style={{color:"#F0F1ED",backgroundColor:"#7D6969"}}><a href="mailto:tristanebond@gmail.com" className="card-link"style={{color:"#F0F1ED"}}>Email</a></li>
      <li className="list-group-item"style={{color:"#F0F1ED",backgroundColor:"#7D6969"}}><a href={techResume} className="card-link"style={{color:"#F0F1ED"}}>Technical Resume</a></li>
      <li className="list-group-item"style={{color:"#F0F1ED",backgroundColor:"#7D6969"}}><a href={resume} className="card-link"style={{color:"#F0F1ED"}}>Resume</a></li>
    </ul>
  </div>
  );
}

export default LinkList;