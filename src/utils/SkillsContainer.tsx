import { motion, Variants } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

interface ISkillsContainer {
    skillType: string,
    skillsList: Array<string>
}

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {

            staggerChildren: 0.3
        }
    }
}

const listItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1, y: 0, transition: {
            type: "ease"
        }
    }
}

const SkillsContainer: React.FC<ISkillsContainer> = ({ skillType, skillsList }) => {
    const [ref, inView] = useInView({ triggerOnce: true })
    return (
        <div className="skills-container">
            <h3 className="skill-type">
                {skillType}
            </h3>
            <motion.ul
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? "show" : ""}
                className="skills-list">
                {
                    skillsList.map((skill, idx) => (
                        <motion.li
                            variants={listItem}
                            key={idx}>{skill}</motion.li>
                    ))
                }
            </motion.ul>
        </div>
    )
}

export default SkillsContainer
