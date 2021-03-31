import React from 'react'

export interface IExperience {
    company: string,
    experience: string,
    list: Array<string>,
    designation: string
}

const Experience: React.FC<IExperience> = ({ company, experience, list, designation }) => {
    return (
        <div className="experience">
            <div className="title">

                <h2 className="companyname ">
                    {company} ( <small>{experience}</small> )
            </h2>
                <p>{designation}</p>
            </div>

            <ul>
                {
                    list.map((item, idx) => (
                        <li key={idx}><span className="text-primary">&#x25B6;</span>{item}.</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Experience
