import { Nav, Navbar } from "react-bootstrap";


function NavigationBar(){
return(
<Navbar style={{backgroundColor:"#6b5ebf", color:"white"}} expand="lg">
  <Navbar.Brand style={{color:"white"}} href="/">Home</Navbar.Brand>
  <Navbar.Toggle style={{color:"white"}}aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className="mr-auto">
      <Nav.Link  style={{color:"white"}}href="/projects">Projects</Nav.Link>
      <Nav.Link style={{color:"white"}} href="/aboutme">About Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;