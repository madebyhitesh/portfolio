import { isMobile } from "./constants"
import mobileImage from '../utils/mobile.png'
import desktopImage from '../utils/desktop.png'

export interface IProjectCard {
    name: string,
    mobile: string,
    desktop: string,
    url?: string,
    github?: string
}

const ProjectCard = ({ desktop, mobile, name, github, url }: IProjectCard) => {

    return (
        <div className="project-card"
        >
            <div className="hero">
                {
                    isMobile ?
                        <img src={mobile} alt={name} /> :
                        <img src={desktop} alt={name} />
                }
            </div>
            <div
                className="card-overlay top">
                <h2 className="text-primary">{name}</h2>
            </div>
            <div className="card-overlay bottom">
                <div className="links">
                    {
                        url ?
                            <button className="btn primary" onClick={() => window.open(url)}>
                                Demo
                            </button> : null
                    }
                    {
                        github ?
                            <button className="btn outlined-primary" onClick={() => window.open(github)}>
                                GitHub
                            </button> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

