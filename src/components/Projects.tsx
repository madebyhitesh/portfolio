import PageHeading from "../utils/PageHeading"
import ProjectCard from "../utils/ProjectCard"

const Projects = () => {


    return (
        <div className="project-page">
            <PageHeading heading="Projects" />
            <section>
                {
                    [1, 2, 3, 4].map(project => (
                        <ProjectCard key={project} />
                    ))
                }
            </section>
        </div>

    )
}

export default Projects
