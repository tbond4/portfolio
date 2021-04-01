import ProjectCard from "../components/ProjectCard";
import workoutBuddies from "../images/workout-buddies.png";
import LinkList from "../components/LinkList";
function Home(){
return (
<div className="d-flex justify-content-between flex-wrap-wrap" style={{backgroundColor:"black"}}>

    <ProjectCard 
        title="Workout-Buddies"
        desc="Allows authenticated users to create, edit and delete their own workouts as well as view and save workouts created by other users."
        image={workoutBuddies}
        link="https://workout-buddies.herokuapp.com/"
    />
    <LinkList/>
</div>
)
}

export default Home;