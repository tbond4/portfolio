import { NavLink} from "react-router-dom";

function Nav(){
return(
<nav className="navbar navbar-expand-lg navbar-light  mt-0"style={{color:"#f0f1ed",backgroundColor:"#957254"}}>
    <a className="navbar-brand" href="/" style={{color:"#f0f1ed"}}>Home</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <a className="nav-link" href="/projects"style={{color:"#f0f1ed"}}>Projects</a>
    <NavLink className="nav-link" to="/AboutMe"style={{color:"#f0f1ed"}}>About Me</NavLink>
    </div>
    </div>
</nav>);
}
export default Nav;