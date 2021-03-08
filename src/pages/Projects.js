import ProjectCard from "../components/ProjectCard";
import workoutBuddies from "../images/workout-buddies.png";
import pubLish from "../images/Pub-Lish.png";

function Projects() {
return(
    <div className="d-flex">
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
</div>
);
}

export default Projects;