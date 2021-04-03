import { motion, Variants } from "framer-motion"
import { Link } from "react-router-dom"
import { pageTransition, pageVariants } from "../App"
import { isMobile } from '../utils/constants'
import SocailLinks from "../utils/SocailLinks"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"



const Home = () => {



    const line1 = "Hi,";
    const line2 = "I'm Hitesh";
    const line3 = "Web Developer";
    const line4 = "Full Stack developer | MERN stack developer";



    const textHoverVariants: Variants = {
        visible: { y: 0, scaleY: 1 },
        hover: { y: [-1, 2, -3, 1, 0], scaleY: [1, 1.2, .7, 1, 1.1], color: "#FCA311" },
        transition: { type: "spring" }
    }




    return (
        <>
            <motion.div
                className="home-page"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
            >

                <section className="landing-left-section">
                    <div className="text">
                        <h1

                        >
                            {
                                line1.split("").map((char: string, idx) => (
                                    <motion.span
                                        initial="visible"
                                        whileHover="hover"
                                        variants={textHoverVariants}
                                        key={idx}>{char}</motion.span>
                                ))
                            }
                        </h1>
                        <h1>
                            {
                                line2.split("").map((char: string, idx) => {
                                    if (char === "H")
                                        return <motion.span
                                            initial={{ y: -230, x: -100, scaleY: .8, opacity: 0 }}
                                            animate={{ y: [-230, 5, -2, 3, 0], x: [-100, 5, -2, 3, 0], scaleY: [1, .5, 1.2, .8, 1], opacity: 1 }}
                                            transition={{ type: "spring", duration: 1, delay: 1.2 }}
                                            className="logo"
                                            key={idx}>{char}</motion.span>
                                    else if (char === "m")
                                        return <motion.span
                                            initial="visible"
                                            whileHover="hover"
                                            variants={textHoverVariants}
                                            key={idx}>{char}&nbsp;</motion.span>
                                    else
                                        return <motion.span
                                            initial="visible"
                                            whileHover="hover"
                                            variants={textHoverVariants}
                                            key={idx}>{char}</motion.span>
                                }
                                )
                            }
                        </h1>
                        <h1>
                            {
                                line3.split("").map((char: string, idx) => {
                                    if (char !== "b")
                                        return <motion.span
                                            initial="visible"
                                            whileHover="hover"
                                            variants={textHoverVariants}
                                            key={idx}>{char}</motion.span>
                                    else
                                        return <motion.span
                                            initial="visible"
                                            whileHover="hover"
                                            variants={textHoverVariants}
                                            key={idx}>{char}&nbsp;</motion.span>
                                }
                                )
                            }
                        </h1>
                        <p>
                            {
                                line4.split("").map((char: string, idx) => {
                                    if (char !== "k" && char !== "r" && char !== "|")
                                        return <motion.span
                                            initial="visible"
                                            whileHover="hover"
                                            variants={textHoverVariants}
                                            key={idx}>{char}</motion.span>
                                    else
                                        return <motion.span
                                            initial="visible"
                                            whileHover="hover"
                                            variants={textHoverVariants}
                                            key={idx}>{char}&nbsp;</motion.span>
                                }


                                )
                            }</p>
                    </div>
                    <div className="action-buttons">
                        <Link to="/project">

                            <button className="btn primary">Projects</button>
                        </Link>

                        <button className="btn outlined-primary" onClick={() => alert("Resume is not available right now. Will be adding soon. Thanks!!")}>Resume</button>

                    </div>
                </section>
                {!isMobile &&
                    <div className="landing-right-section">
                        <motion.svg

                            animate={{ rotateZ: -2 }}
                            transition={{ type: "power", duration: 2, repeat: Infinity, repeatType: "reverse", times: [0, 0.2, 1] }}
                            width="352" height="400" viewBox="0 0 352 419" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                initial={{ fill: "none", x: 25 }}
                                animate={{ fill: "black", x: 0 }}
                                transition={{ duration: 1, type: "spring" }}
                                d="M323.244 408.681C323.244 415.406 303.264 418.769 263.304 418.769C223.344 418.769 203.364 415.406 203.364 408.681V272.184H120.28V408.681C120.28 415.406 100.3 418.769 60.3401 418.769C20.3803 418.769 0.400391 415.406 0.400391 408.681V15.2153C0.400391 6.9068 20.3803 2.75256 60.3401 2.75256C100.3 2.75256 120.28 6.9068 120.28 15.2153V154.679H203.364V16.4022C203.364 10.8632 213.255 6.9068 233.038 4.53296C243.324 3.74167 253.413 3.34602 263.304 3.34602L293.571 4.53296C313.353 6.9068 323.244 10.8632 323.244 16.4022V408.681Z" fill="black" />
                            <motion.path
                                initial={{ strokeWidth: 2, pathLength: 1, stroke: "white", pathOffset: 0, }}
                                animate={{ x: 0, pathLength: 0, pathOffset: 2 }}
                                transition={{ duration: 10, type: "tween", repeat: Infinity, repeatType: "mirror", repeatDelay: 1, delay: 2 }}
                                d="M351.944 406.355C351.944 413.081 331.964 416.444 292.004 416.444C252.044 416.444 232.065 413.081 232.065 406.355V269.859H148.98V406.355C148.98 413.081 129 416.444 89.0402 416.444C49.0804 416.444 29.1005 413.081 29.1005 406.355V12.8897C29.1005 4.58124 49.0804 0.427002 89.0402 0.427002C129 0.427002 148.98 4.58124 148.98 12.8897V152.353H232.065V14.0766C232.065 8.53765 241.956 4.58124 261.738 2.2074C272.024 1.4161 282.113 1.02046 292.004 1.02046L322.271 2.2074C342.053 4.58124 351.944 8.53765 351.944 14.0766V406.355Z" fill="#FCA311"
                            />
                        </motion.svg>
                    </div>
                }

                <SocailLinks />



            </motion.div>
            <Projects />
            <About />
            <Contact />
        </>



    )
}

export default Home
