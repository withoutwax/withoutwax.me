import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Experience from './experience';
import Education from './education';
import Award from './award';

class Resume extends React.Component {

    render() {
        const data = this.props;
        const resume = data.resume.allDataYaml.edges[0].node;
        const experiences = resume.experiences;
        const volunteers = resume.volunteers;
        const educations = resume.educations;
        const awards = resume.awards;

        let experience = experiences && (experiences.map((resume, index) => (
            <Experience 
                key={index}
                company={resume.experience.company}
                position={resume.experience.position}
                date={resume.experience.date}
                locations={resume.experience.location}
                description={resume.experience.description}
            />
        )))
        let volunteer = volunteers && (volunteers.map((resume, index) => (
            <Experience //Use experience since the format is the same 
                key={index}
                company={resume.volunteer.company}
                position={resume.volunteer.position}
                date={resume.volunteer.date}
                locations={resume.volunteer.location}
                description={resume.volunteer.description}
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
        let award = awards && (awards.map((resume, index) => (
            <Award
                key={index}
                title={resume.award.title}
                date={resume.award.date}
                achievement={resume.award.achievement}
             />
        )))
        

        return (
            <div className="resume-container">
                <h3>Experience</h3>
                { experience }

                <h3>Volunteer</h3>
                { volunteer }

                {/* <h3>Featured Projects</h3>
                <p style={{marginTop:"5px", fontStyle:"italic"}}>Coming Soon</p> */}

                <h3>Honors & Awards</h3>
                { award }

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
                                location
                                description
                            }
                        }
                        volunteers {
                            volunteer {
                                company
                                position
                                date
                                location
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
                        awards {
                            award {
                                title
                                date
                                achievement
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