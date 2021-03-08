import { NavLink} from "react-router-dom";

function Nav(){
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light mt-0">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
    <a className="nav-link" href="/projects">Projects</a>
    <NavLink className="nav-link" to="/AboutMe">About Me</NavLink>
    </div>
    </div>
</nav>);
}
export default Nav;