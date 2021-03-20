import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { isMobile } from './constants'

interface Props {
    heading: string
}

const PageHeading: React.FC<Props> = ({ heading }) => {
    const [ref, inView] = useInView({ triggerOnce: true })

    const pageHeadingVariant: Variants = {
        initial: { pathLength: 0 },
        visible: {
            pathLength: 1,
            strokeWidth: 3,
            transition: {
                duration: 2,
                type: "ease"
            }
        },

    }

    return (
        <header ref={ref} className="page-heading">
            <svg className="line-one" width={isMobile ? "90%" : "100%"} height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial="initial"
                    animate={inView ? "visible" : ""}
                    variants={pageHeadingVariant}
                    d="M0 3L985 2.99991" stroke="#FCA311" stroke-width="6" />
            </svg>
            <motion.h1
                initial={{ x: -20, opacity: .5 }}
                animate={inView && { x: 0, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    type: "ease"
                }}
            >{heading}</motion.h1>
            <svg className="line-two" width={isMobile ? "90%" : "100%"} height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial="initial"
                    animate={inView ? "visible" : ""}
                    variants={pageHeadingVariant}
                    d="M0 3L985 2.99991" stroke="#FCA311" stroke-width="6" />
            </svg>

            {/* <motion.div
                initial="initial"
                animate={inView ? "visible" : ""}
                variants={pageHeadingVariant}
                className="line line-two"></motion.div> */}
        </header>
    )
}

export default PageHeading
