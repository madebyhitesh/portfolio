import { useState } from "react"
import { isMobile } from "../utils/constants"

const Navbar = () => {

    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    return (
        <nav>
            <div className="logo">
                H
            </div>
            <ul className={isMenuBtnClicked ? "nav-links active" : "nav-links"}>
                <li className="navlink active">Home</li>
                <li className="navlink">Projects</li>
                <li className="navlink">About</li>
                <li className="navlink">Skills</li>
                <li className="navlink">Contact me</li>
            </ul>

            <div className="nav-buttons">
                {
                    !isMobile &&
                    <button className="btn outlined-primary">Projects</button>
                }
                <button className="btn primary">Resume</button>
            </div>
            {
                isMobile &&
                <div className="hamburger-menu-button" onClick={() => setIsMenuBtnClicked(!isMenuBtnClicked)}>
                    <div className={isMenuBtnClicked ? "hamburger-menu open" : "hamburger-menu"} />
                </div>

            }

        </nav>
    )
}

export default Navbar
