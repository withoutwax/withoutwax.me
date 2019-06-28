import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link, graphql  } from 'gatsby';
import Layout from '../components/Layout';
// import Content, { HTMLContent } from '../components/Content';

import Resume from '../pages/about/resume/resume';
// import { prototype } from 'module';

export const AboutPageTemplate = ({ aboutAbout }) => {
  return (
    <article className="about-container">
        {aboutAbout.qna.map((about, i) => (
            <div className="about-section" style={{ marginTop:"5px" }} key={i}>
                <h2>{about.question}</h2>
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
    return (
        <article id="about-resume">
            <h2>Will Kim</h2>
            <div>
                {/* {console.log(aboutResume)} */}
                <Resume resume={aboutResume}/>
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
            <h1><span id="about-about-btn" className={aboutcssclass} onClick={() => aboutToggle()} >About</span> <span id="about-resume-btn" className={resumecssclass} onClick={() => resumeToggle()} >Resume</span></h1>

            {resume ? <ResumePageTemplate aboutResume={frontmatter.aboutResume} /> : <AboutPageTemplate aboutAbout={frontmatter.aboutAbout} />}

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