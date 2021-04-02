import ProjectCard from "../components/ProjectCard";
import JUO from "../images/JUO.png";
import LinkList from "../components/LinkList";
import SelfPic from "../components/SelfPic";
import self from "../images/self.png"
import { Button, Card } from "react-bootstrap";
function Home(){
return (
<div className="d-flex" style={{backgroundColor:"black", flexDirection:"row", flexWrap:"wrap",justifyContent:"space-evenly",}}>
   
    <ProjectCard 
        title="Join Us Outside"
        desc="Allows users to view, join and organize outdoor recreational activites. Explore the outdoors with new friends. Full stack MERN group project, My Role: Frontend REACT"
        image={JUO}
        link="https://join-us-outside.herokuapp.com/"
        codeLink="https://github.com/epowelldev/p03-outdoor-activity-app"
    />
    <Card style={{backgroundColor:"#5d88ba",margin:"1%",borderColor:"#6b5ebf",}}>
        <Card.Img src={self} alt="cite author"/>
        <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
        <Button href="/projects" style={{backgroundColor:"#6b5ebf",borderRadius:"20px",width:"200px"}}>More Projects</Button>
        <Button href="/https://www.instagram.com/tristan__bond/" style={{backgroundColor:"#6b5ebf",borderRadius:"20px",width:"200px"}}>Instagram</Button>
        <Button href="/aboutMe" style={{backgroundColor:"#6b5ebf",borderRadius:"20px",width:"200px"}}>More About Me</Button>
        </Card.Body>
    </Card>
    {/* <SelfPic/> */}
    <LinkList/>
</div>
)
}

export default Home;