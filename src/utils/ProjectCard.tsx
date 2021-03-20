import { isMobile } from "./constants"
import mobileImage from '../utils/mobile.png'
import desktopImage from '../utils/desktop.png'

const ProjectCard = () => {

    return (
        <div className="project-card"
        >
            <div className="hero">
                {
                    isMobile ?
                        <img src={mobileImage} alt="mobile" /> :
                        <img src={desktopImage} alt="desktop" />
                }
            </div>
            <div
                className="card-overlay top">
                <h2 className="text-primary">Food Express</h2>
            </div>
            <div className="card-overlay bottom">
                <div className="links">
                    <button className="btn primary">
                        Demo
                        </button>
                    <button className="btn outlined-primary">
                        GitHub
                        </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

