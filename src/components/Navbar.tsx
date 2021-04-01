import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Link, useLocation } from 'react-router-dom'
import { isMobile } from "../utils/constants"

const activeLink = (pathname: string, elementPath: string): string => {
    if (pathname === elementPath)
        return "navlink active"
    else
        return "navlink"

}

const menuStyles: React.CSSProperties = {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: "50%",
    height: "50px",
    width: "50px",

}
const Navbar = () => {

    const [ref, inView] = useInView()


    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    const { pathname } = useLocation()

    console.log(inView)

    return (
        <nav ref={ref}>
            <div className="logo">
                H
            </div>
            <ul className={isMenuBtnClicked ? "nav-links active" : "nav-links"}>
                <li className={activeLink(pathname, "/")}><Link to="/">Home</Link></li>
                <li className={activeLink(pathname, "/project")}><Link to="/project">Projects</Link></li>
                <li className={activeLink(pathname, "/about")}>< Link to="/about">About</ Link></li>
                <li className={activeLink(pathname, "/contact")}><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="nav-buttons">
                {
                    !isMobile &&
                    <Link to="/project" >
                        <button className="btn outlined-primary">Projects</button>
                    </Link>
                }
                <button className="btn primary">Resume</button>
            </div>
            {
                isMobile &&
                <div
                    style={!inView ? menuStyles : {}}
                    className="hamburger-menu-button" onClick={() => setIsMenuBtnClicked(!isMenuBtnClicked)}>
                    <div className={isMenuBtnClicked ? "hamburger-menu open" : "hamburger-menu"} />
                </div>

            }

        </nav>
    )
}

export default Navbar
