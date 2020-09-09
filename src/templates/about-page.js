import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link, graphql  } from 'gatsby';
import Layout from '../components/Layout';

import Experience from '../pages/about/resume/experience';
import Volunteer from '../pages/about/resume/volunteer';
import Education from '../pages/about/resume/education';
import Award from '../pages/about/resume/award';

export const AboutPageTemplate = ({ aboutAbout }) => {
  return (
    <article className="about-container">
        {aboutAbout.qna.map((about, i) => (
            <div className="about-section" style={{ marginTop:"5px" }} key={i}>
                <h3>{about.question}</h3>
                <p>{about.answer}</p>
            </div>
        ))}
        <div>
            <p>Thanks for visiting! <span role="img" aria-label="cheers!">🙌🏼 </span></p>
            <Link to="/about/withoutwax/" alt="withoutwax">
                without wax
            </Link>,
            <p>Will Kim</p>
        </div>
    </article>
  );
}

export const ResumePageTemplate = ({ aboutResume }) => {
    const { experience: experiences, volunteer: volunteers, education: educations, award: awards } = aboutResume;

    return (
        <article id="about-resume">
            <div className="resume-container">
                <h3>Experience</h3>
                {experiences && experiences.map((experience, index) => (
                        <Experience 
                            key={index}
                            company={experience.company}
                            position={experience.position}
                            startDate={experience.startDate}
                            currentlyWorking={experience.currentlyWorking}
                            endDate={experience.endDate}
                            locations={experience.location}
                            description={experience.description}
                        />
                ))}

                <h3>Volunteer</h3>
                {volunteers && volunteers.map((volunteer, index) => (
                    <Volunteer 
                        key={index}
                        organization={volunteer.organization}
                        position={volunteer.position}
                        startDate={volunteer.startDate}
                        currentlyWorking={volunteer.currentlyWorking}
                        endDate={volunteer.endDate}
                        locations={volunteer.location}
                        description={volunteer.description}
                    />
                ))}

                {/* <h3>Featured Projects</h3>
                <p style={{marginTop:"5px", fontStyle:"italic"}}>Coming Soon</p> */}

                <h3>Honors & Awards</h3>
                {awards && awards.map((award, index) => (
                    <Award 
                        key={index}
                        title={award.title}
                        date={award.date}
                        description={award.description}
                    />
                ))}

                <h3>Education</h3>
                {educations && educations.map((education, index) => (
                    <Education
                        key={index}
                        school={education.school}
                        startDate={education.startDate}
                        currentlyAttending={education.currentlyAttending}
                        endDate={education.endDate}
                        degree={education.degree}
                        major={education.major}
                    />
                ))}

            </div>
        </article>
    );
}   

AboutPageTemplate.propTypes = {
    aboutAbout: PropTypes.shape({
        title: PropTypes.string,
        qna: PropTypes.array
    }),
}

ResumePageTemplate.propTypes = {
    aboutResume: PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        experience: PropTypes.array,
        volunteer: PropTypes.array,
        education: PropTypes.array,
        award: PropTypes.array
    }),
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    // React Hooks
    const [resume, setResume] = useState(false);
    const [aboutcssclass, setAboutCss] = useState("focus-btn");
    const [resumecssclass, setResumeCss] = useState("unfocus-btn");

    const aboutToggle = () => {
        setResume(false);
        setAboutCss("focus-btn");
        setResumeCss("unfocus-btn");
    }

    const resumeToggle = () => {
        setResume(true);
        setAboutCss("unfocus-btn");
        setResumeCss("focus-btn");
    }

    return (
        <Layout>
        <section>
            <h2 className="mb-16 flex justify-between"><span id="about-about-btn" className={aboutcssclass} role="button" tabIndex='0' onClick={() => aboutToggle()} onKeyDown={() => aboutToggle()}>About <span role="img" aria-label="profile">👨🏻‍💻</span></span> <span id="about-resume-btn" className={resumecssclass} role="button" tabIndex='0' onClick={() => resumeToggle()} onKeyDown={() => resumeToggle()} >Resume <span role="img" aria-label="resume">📄</span></span></h2>

            {resume ? 
            <ResumePageTemplate aboutResume={frontmatter.aboutResume} /> : <AboutPageTemplate aboutAbout={frontmatter.aboutAbout} />}

        </section>
        </Layout>
    )
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default AboutPage;

export const aboutPageQuery = graphql`
query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        aboutAbout {
            title
            qna {
                question
                answer
            }
        }
        aboutResume {
            title
            name
            experience {
                company
                position
                startDate
                currentlyWorking
                endDate
                location
                description
            }
            volunteer {
                    organization
                    position
                    startDate
                    currentlyWorking
                    endDate
                    location
                    description
            }
            education {
                    school
                    startDate
                    currentlyAttending
                    endDate
                    degree
                    major
            }
            award {
                    title
                    date
                    description
                }
            }
        } 
    }
  }
`