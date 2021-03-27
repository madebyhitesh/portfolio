import PageHeading from "../utils/PageHeading";
import ProfilePic from "../utils/profile.jpg";
import SkillsContainer from "../utils/SkillsContainer";


function myAge(dateString: string) {
    const today = new Date();
    const birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const frontEndSkills: Array<string> = [
    "HTML,Css,JS", "Typescript", "React.js", "Redux", "Scss", "React Bootstrap", "Framer Motion"
]
const backEndSkills: Array<string> = [
    "Nodejs", "Typescript", "Expressjs", "Mongo DB", "REST APIs", "Graphql"
]
const toolsUsed: Array<string> = [
    "NPM and Yarn", "Git", "Figma"
]
const otherSkills: Array<string> = [
    "Mobile Fist design"
]

const About = () => {


    return (
        <div className="about-page">
            <PageHeading heading="About" />
            <section>
                <div className="profile-pic">
                    <img src={ProfilePic} alt="profile-pic" />
                </div>
                <div className="description">
                    <div className="job-title">
                        <h2 className="text-primary">
                            MERN Stack Developer
                    </h2>
                    </div>
                    <div className="bio">
                        <div>
                            <strong><span className="text-primary">&#x25B6;</span> Age</strong>
                            <p>{myAge("1999-07-31")}</p>
                        </div>
                        <div>
                            <strong><span className="text-primary">&#x25B6;</span> Education</strong>
                            <p>BSc Computer Science</p>
                        </div>
                        <div>
                            <strong><span className="text-primary">&#x25B6;</span> Email</strong>
                            <p>webdev.hitesh@gmail.com</p>
                        </div>
                        <div>
                            <strong><span className="text-primary">&#x25B6;</span> City</strong>
                            <p>Chandigarh,India</p>
                        </div>
                    </div>

                    <div className="skills">
                        <div className="heading">
                            <svg className="line-two" width="60%" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 3L985 2.99991" stroke="#efefef" stroke-width="2" />
                            </svg>
                            <h2 className="text-primary">Skills</h2>
                            <svg className="line-two" width="60%" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 3L985 2.99991" stroke="#efefef" stroke-width="2" />
                            </svg>
                        </div>

                        <div className="container-skills">
                            <SkillsContainer skillType="Frontend" skillsList={frontEndSkills} />
                            <SkillsContainer skillType="Backend" skillsList={backEndSkills} />
                            <SkillsContainer skillType="Tools used" skillsList={toolsUsed} />
                            <SkillsContainer skillType="Other skills" skillsList={otherSkills} />
                        </div>

                        {/* <table>
                            <thead>
                                <tr>

                                    <th className="text-primary">
                                        Frontend
                                </th>
                                    <th className="text-primary">
                                        Backend
                                </th>
                                    <th className="text-primary">
                                        Tools used
                                </th>
                                    <th className="text-primary">
                                        Other skills
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTML, Css, JS</td>
                                    <td>Nodejs</td>
                                    <td>npm and yarn</td>
                                    <td>Mobile first design</td>
                                </tr>
                                <tr>
                                    <td>Typescript</td>
                                    <td>Graphql</td>
                                    <td>Git</td>
                                </tr>
                                <tr>
                                    <td>React.js</td>
                                    <td>Express js</td>
                                    <td>Postman</td>
                                </tr>
                                <tr>
                                    <td>Redux</td>
                                    <td>Mongo DB</td>
                                    <td>Figma</td>
                                </tr>
                                <tr>
                                    <td>Scss</td>
                                    <td>REST APIs</td>
                                </tr>
                                <tr>
                                    <td>React Bootstrap</td>
                                </tr>
                            </tbody>
                        </table> */}

                    </div>

                </div>
            </section>
        </div>

    )
}

export default About
