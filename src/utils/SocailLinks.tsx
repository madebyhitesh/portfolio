import { motion, Variants } from 'framer-motion'
import React, { useState } from 'react'

const socailHoverVariants: Variants = {
    visible: { pathLength: [1, 0, 1] },
    hidden: { pathLength: 1, strokeWidth: 2 },
}
const SocailLinks = () => {
    const [gitHubHover, setGitHubHover] = useState(false)
    const [linkedinHover, setLinkedinHover] = useState(false)
    const [instaHover, setInstaHover] = useState(false)


    return (
        <div className="social-links">
            <div className="vertical-line top"></div>
            {/* linkedin */}
            <a href="https://www.linkedin.com/in/hitesh-kumar-6b10291b2" target="_blank" rel="noreferrer">
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
            </a>

            {/* github */}
            <a href={"https://github.com/hitesh-webRepo"} target="_blank" rel="noreferrer">
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
            </a>

            {/* instagram */}
            <a href="https://www.instagram.com/coding_.panda/" target="_blank" rel="noreferrer">

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
            </a>

            <div className="vertical-line down"></div>

        </div>

    )
}

export default SocailLinks
