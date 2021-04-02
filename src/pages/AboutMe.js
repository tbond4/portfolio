import { Card } from "react-bootstrap";
import LinkList from "../components/LinkList";

function AboutMe(){
return (
    <div>
    <div className="d-flex mb-5" style={{color:"#f0f1ed",backgroundColor:"black",justifyContent:"space-evenly",marginTop:"3%"}}>

    <div className="card col-9 mb-5"style={{color:"#f0f1ed",backgroundColor:"black",margin:"1%"}}>
        <div className="card-header" style={{backgroundColor:"#5d88ba"}}>
            About Me
        </div>
         <div className="card-body" style={{color:"#F0F1ED",backgroundColor:"#6b5ebf"}}>
                Hello! I am a recent graduate of Colorado State University and the University of Washingtons Full-Stack coding bootcamp. My time in Colorado 
            began by studying Engineering before making the switch to Philosophy after two years. Fascinated by perspective and exploration of consciouness my studies
            optimized my criticial and logical thinking. These skills flowed nicely into my web development education and hopefully will continue to help me
            as I go into my new career field.
            <br/>
            <br/>
                My story as person started from growing up in a small town in Washington State. Team sports and school were my focus before finding a love of cycling
            that has stayed with me ever since. College took me to Colorado where my cycling and hiking passions followed and I found a new passion in mindfullness meditation.
            Post graduation I have moved back to my home state and am now pursuing my career as a developer. My goal is to improve everyday, guided by stoicism, existentialism and 
            extreme ownership
        </div>
    </div>
    <LinkList/>
    </div>
    <Card style={{backgroundColor:"black"}}>
        <Card.Body style={{textAlign:"center",fontSize:"3em"}}>
            <blockquote className="blockquote mb-0">
            <p>
            {' '}
             Who you could be is more important than who you are.{' '}
            </p>
            <footer className="blockquote-footer">
            <cite title="Source Title">Jordan Peterson</cite>
            </footer>
            </blockquote>
        </Card.Body>
    </Card>

    </div>
);
}

export default AboutMe;