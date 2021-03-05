import ProjectCard from "../components/ProjectCard";
import workoutBuddies from "../images/workout-buddies.png";
function Home(){
return (
<div>
    <ProjectCard 
        title="Workout-Buddies"
        desc="Allows authenticated users to create, edit and delete their own workouts as well as view and save workouts created by other users."
        image={workoutBuddies}
        link="https://workout-buddies.herokuapp.com/"
    />
</div>
)
}

export default Home;