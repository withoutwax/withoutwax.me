import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Experience from './experience';
import Education from './education';

class Resume extends React.Component {

    render() {
        const data = this.props;
        const resume = data.resume.allDataYaml.edges[0].node;
        const experiences = resume.experiences;
        const educations = resume.educations;

        let experience = experiences && (experiences.map((resume, index) => (
            <Experience 
                key={index}
                company={resume.experience.company}
                position={resume.experience.position}
                date={resume.experience.date}
                description={resume.experience.description}
            />
        )))
        let education = educations && (educations.map((resume, index) => (
            <Education 
                key={index}
                school={resume.education.school}
                date={resume.education.date}
                degree={resume.education.degree}
                major={resume.education.major}
            />
        )))
        

        return (
            <div className="resume-container">
                <h3>Experience</h3>
                { experience }

                {/* <h3>Featured Projects</h3>
                <p style={{marginTop:"5px", fontStyle:"italic"}}>Coming Soon</p> */}
                
                <h3>Education</h3>
                { education }

            </div>      
        );
    }
}

export default () => (
    <StaticQuery
        query={graphql`
        query ResumeQuery {
            allDataYaml {
                edges {
                    node {
                        experiences {
                            experience {
                                company
                                position
                                date
                                description
                            }
                        }
                        educations {
                            education {
                                school
                                date
                                degree
                                major
                            }
                        }
                    }
                }
            }
        }
          
        `}
    render={( resume ) => (<Resume resume={resume} />)}
    />
)