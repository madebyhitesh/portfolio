import useDatabase from "../firebase/useDatabase"
import PageHeading from "../utils/PageHeading"
import ProjectCard, { IProjectCard } from "../utils/ProjectCard"

const Projects = () => {

    const { docs: projects } = useDatabase("projects")
    return (
        <div className="project-page">
            <PageHeading heading="Projects" />
            <section>
                {
                    projects.map(({ url, github, name, mobile, desktop }: IProjectCard) => (
                        <ProjectCard url={url} name={name} mobile={mobile} desktop={desktop} github={github} />
                    ))
                }
            </section>
        </div>

    )
}

export default Projects
