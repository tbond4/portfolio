import ProjectCard from "../components/ProjectCard";
import workoutBuddies from "../images/workout-buddies.png";
import pubLish from "../images/pub-lish.png";
import JUO from "../images/JUO.png";
import gbs from "../images/gbs.png"
function Projects() {
return(
    <div className="d-flex flex-wrap justify-content-around">
    <ProjectCard 
    title="Workout-Buddies"
    desc="Allows authenticated users to create, edit and delete their own workouts as well as view and save workouts created by other users."
    image={workoutBuddies}
    link="https://workout-buddies.herokuapp.com/"
    />
    <ProjectCard 
    title="Pub-Lish"
    desc="Allows users to search US cities and see breweries/pubs/bars appear on a map and list."
    image={pubLish}
    link="https://pub-lish.herokuapp.com/"
    />
    <ProjectCard 
    title="Join Us Outside"
    desc="Allows users to view, join and organize outdoor recreational activites. Explore the outdoors with new friends"
    image={JUO}
    link="https://join-us-outside.herokuapp.com/"
    />
    <ProjectCard 
    title="Google Books Search"
    desc="Web application for users to search by book title using a google books API, they can then save books to their own page to view later"
    image={gbs}
    link="https://sheltered-hollows-70515.herokuapp.com/"
    />
</div>
);
}

export default Projects;