import LinkList from "../components/LinkList";

function AboutMe(){
return (
    <div className="d-flex">

    <div className="card col-9">
        <div className="card-header">
            About Me
        </div>
         <div className="card-body">
                Hello! I am a recent graduate of Colorado State University and the University of Washingtons Full-Stack coding bootcamp. My time in Colorado 
            began by studying Engineering before making the swith to Philosophy after two years. Fascinated by perspective exploration of consciouness my studies
            optimized my crticial and logical thinking. These skills flowed nicely into my web development education and hopefully will continue to help me
            as I go into my new career field.
            <br/>
                My story as person started from growing up in a small town in Washington State. Team sports and school were my focus before finding a love of cycling
            that has stayed with me ever since. College took me to Colorado where my cycling and hiking passions followed and I found a new passion in mindfullness meditation.
            Post graduation I have moved back to my home state and am now pursuing my career as a developer.
        </div>
    </div>
    <LinkList/>
    </div>
);
}

export default AboutMe;