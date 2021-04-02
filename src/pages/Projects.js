import ProjectCard from "../components/ProjectCard";
import workoutBuddies from "../images/workout-buddies.png";
import pubLish from "../images/pubLish.png"
import JUO from "../images/JUO.png";
import gbs from "../images/gbs.png"


function Projects() {
return(
    <div className="d-flex flex-wrap justify-content-around" style={{backgroundColor:"black"}} >
    <ProjectCard 
    title="Workout-Buddies"
    desc="Allows authenticated users to create, edit and delete their own workouts as well as view and save workouts created by other users. 
    Full Stack group project, My Role: Backend Focus"
    image={workoutBuddies}
    link="https://workout-buddies.herokuapp.com/"
    codeLink="https://github.com/Tuzosdaniel12/Workout-Buddies"
    />
    <ProjectCard 
    title="Pub-Lish"
    desc="Allows users to search US cities and see breweries/pubs/bars appear on a map and list. Group Project, My Role: API and Mapboxx functionality"
    image={pubLish}
    link="https://pub-lish.herokuapp.com/"
    codeLink="https://github.com/LauraGwendolynBurch/Pub-Lish"
    />
    <ProjectCard 
    title="Join Us Outside"
    desc="Allows users to view, join and organize outdoor recreational activites. Explore the outdoors with new friends. Full stack MERN group project, My Role: Frontend REACT"
    image={JUO}
    link="https://join-us-outside.herokuapp.com/"
    codeLink="https://github.com/epowelldev/p03-outdoor-activity-app"
    />
    <ProjectCard 
    title="Google Books Search"
    desc="Web application for users to search by book title using a google books API, they can then save books to their own page to view later. MERN stack solo project."
    image={gbs}
    link="https://sheltered-hollows-70515.herokuapp.com/"
    codeLink="https://github.com/tbond4/googleBooksSearch"
    />
</div>
);
}

export default Projects;