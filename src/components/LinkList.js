import techResume from "../images/TristanBondTechnicalResume.pdf";
import resume from "../images/TristanBondResume.pdf";
function LinkList(){

    return(
    <div className="card col-3" style={{width: "18rem"}}>
        
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><a href="https://www.linkedin.com/in/tristanbond/" className="card-link">LinkedIn</a></li>
      <li className="list-group-item"><a href="https://github.com/tbond4" className="card-link">GitHub</a></li>
      <li className="list-group-item"><a href="mailto:tristanebond@gmail.com" className="card-link">Email</a></li>
      <li className="list-group-item"><a href={techResume} className="card-link">Technical Resume</a></li>
      <li className="list-group-item"><a href={resume} className="card-link">Resume</a></li>
    </ul>
  </div>
  );
}

export default LinkList;