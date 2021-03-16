import { motion, Variants } from "framer-motion"
import { useState } from 'react'
import { isMobile } from '../utils/constants'
const Home = () => {
    const [gitHubHover, setGitHubHover] = useState(false)
    const [linkedinHover, setLinkedinHover] = useState(false)
    const [instaHover, setInstaHover] = useState(false)


    const line1 = "Hi,";
    const line2 = "I'm Hitesh";
    const line3 = "Web Developer";
    const line4 = "Full Stack developer | MERN stack developer";

    const socailHoverVariants: Variants = {
        visible: { pathLength: [1, 0, 1] },
        hidden: { pathLength: 1, strokeWidth: 2 },
    }

    const textHoverVariants: Variants = {
        visible: { y: 0, scaleY: 1 },
        hover: { y: [-1, 2, -3, 1, 0], scaleY: [1, 1.2, .7, 1, 1.1], color: "#FCA311" },
        transition: { type: "spring" }
    }




    return (
        <div className="home-page">

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
                                if (char !== "H")
                                    return <motion.span
                                        initial="visible"
                                        whileHover="hover"
                                        variants={textHoverVariants}
                                        key={idx}>{char}</motion.span>
                                else
                                    return <motion.span
                                        initial={{ y: -230, x: -100, scaleY: .8, opacity: 0 }}
                                        animate={{ y: [-230, 5, -2, 3, 0], x: [-100, 5, -2, 3, 0], scaleY: [1, .5, 1.2, .8, 1], opacity: 1 }}
                                        transition={{ type: "spring", duration: 1, delay: .3 }}
                                        className="logo" key={idx}>&nbsp;{char}</motion.span>
                            }
                            )
                        }
                    </h1>
                    <h1>
                        {
                            line3.split("").map((char: string, idx) => {
                                if (char !== "D")
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
                                        key={idx}>&nbsp;{char}</motion.span>
                            }
                            )
                        }
                    </h1>
                    <p>
                        {
                            line4.split("").map((char: string, idx) => {
                                if (char !== "d" && char !== "|" && char !== "M")
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
                                        key={idx}>&nbsp;{char}</motion.span>
                            }


                            )
                        }</p>
                </div>
                <div className="action-buttons">
                    <button className="btn primary">Projects</button>
                    <button className="btn outlined-primary">Resume</button>
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

            <div className="social-links">
                <div className="vertical-line top"></div>
                {/* linkedin */}
                <motion.svg
                    onHoverStart={() => setLinkedinHover(true)}
                    onHoverEnd={() => setLinkedinHover(false)}
                    width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        variants={socailHoverVariants}
                        initial="hidden"
                        animate={linkedinHover ? "visible" : ""}
                        d="M26.6667 13.3334C29.3189 13.3334 31.8624 14.3869 33.7378 16.2623C35.6131 18.1377 36.6667 20.6812 36.6667 23.3334L36.6667 35L30 35L30 23.3334C30 22.4493 29.6488 21.6015 29.0237 20.9764C28.3986 20.3512 27.5507 20 26.6667 20C25.7826 20 24.9348 20.3512 24.3097 20.9764C23.6845 21.6015 23.3334 22.4493 23.3334 23.3334L23.3334 35L16.6667 35L16.6667 23.3334C16.6667 20.6812 17.7203 18.1377 19.5956 16.2623C21.471 14.3869 24.0145 13.3334 26.6667 13.3334V13.3334Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={socailHoverVariants}
                        initial="hidden"
                        animate={linkedinHover ? "visible" : ""}
                        d="M9.99998 15L3.33331 15L3.33331 35L9.99998 35L9.99998 15Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={socailHoverVariants}
                        initial="hidden"
                        animate={linkedinHover ? "visible" : ""}
                        d="M6.66665 10C8.5076 10 9.99998 8.50766 9.99998 6.66671C9.99998 4.82576 8.5076 3.33337 6.66665 3.33337C4.8257 3.33337 3.33331 4.82576 3.33331 6.66671C3.33331 8.50766 4.8257 10 6.66665 10Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </motion.svg>

                {/* github */}
                <motion.svg
                    onHoverStart={() => setGitHubHover(true)}
                    onHoverEnd={() => setGitHubHover(false)}
                    width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <motion.path
                            variants={socailHoverVariants}
                            initial="hidden"
                            animate={gitHubHover ? "visible" : ""}
                            d="M26.6666 36.6667L26.6666 30.2167C26.7292 29.422 26.6218 28.6231 26.3517 27.873C26.0815 27.123 25.6549 26.4391 25.1 25.8667C30.3333 25.2834 35.8333 23.3001 35.8333 14.2001C35.8329 11.8731 34.9378 9.63539 33.3333 7.95006C34.0931 5.91424 34.0394 3.66397 33.1833 1.66673C33.1833 1.66673 31.2166 1.08339 26.6666 4.13339C22.8467 3.0981 18.82 3.0981 15 4.13339C10.45 1.08339 8.48331 1.66673 8.48331 1.66673C7.62727 3.66397 7.57355 5.91424 8.33331 7.95006C6.71686 9.64789 5.82085 11.9058 5.83331 14.2501C5.83331 23.2834 11.3333 25.2667 16.5666 25.9167C16.0183 26.4833 15.5954 27.1591 15.3255 27.8999C15.0556 28.6408 14.9447 29.4302 15 30.2167L15 36.6667M15 31.6667C6.66665 34.1667 6.66665 27.5001 3.33331 26.6667L15 31.6667Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </motion.svg>

                {/* instagram */}
                <motion.svg
                    onHoverStart={() => setInstaHover(true)}
                    onHoverEnd={() => setInstaHover(false)}
                    width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        variants={socailHoverVariants}
                        initial="hidden"
                        animate={instaHover ? "visible" : ""}
                        d="M24.7917 2.91663L10.2084 2.91663C6.18128 2.91663 2.91669 6.18122 2.91669 10.2083L2.91669 24.7916C2.91669 28.8187 6.18128 32.0833 10.2084 32.0833L24.7917 32.0833C28.8188 32.0833 32.0834 28.8187 32.0834 24.7916L32.0834 10.2083C32.0834 6.18122 28.8188 2.91663 24.7917 2.91663Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={socailHoverVariants}
                        initial="hidden"
                        animate={instaHover ? "visible" : ""}
                        d="M23.3333 16.5812C23.5133 17.7949 23.306 19.0344 22.7409 20.1235C22.1758 21.2126 21.2817 22.0958 20.1857 22.6474C19.0897 23.199 17.8477 23.391 16.6363 23.1961C15.425 23.0012 14.3059 22.4292 13.4383 21.5616C12.5707 20.6941 11.9988 19.575 11.8038 18.3636C11.6089 17.1522 11.8009 15.9102 12.3525 14.8142C12.9042 13.7183 13.7873 12.8242 14.8764 12.2591C15.9655 11.694 17.205 11.4866 18.4187 11.6666C19.6567 11.8502 20.8029 12.4271 21.6879 13.3121C22.5728 14.197 23.1497 15.3432 23.3333 16.5812Z" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={socailHoverVariants}
                        initial="hidden"
                        animate={instaHover ? "visible" : ""}
                        d="M25.5208 9.47913L25.5308 9.47913" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </motion.svg>

                <div className="vertical-line down"></div>

            </div>


        </div>



    )
}

export default Home
