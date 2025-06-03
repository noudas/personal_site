import ProjectComponent from "../../components/projectComponent/projectComponent";
import TitleComponent from "../../components/titleComponent/titleComponent";

const Projects = () =>{
    return (
        <>
            <TitleComponent title={"PROJECTS"} color={"var(--azulClaro)"}/>
            <ProjectComponent description={"Hard cheese cheesecake jarlsberg. Emmental cheesy feet taleggio red leicester cheeseburger mozzarella ricotta cheesy feet."} title={"PROJECT NAME AQUI"} link={""} />
        </>
    )
}

export default Projects;