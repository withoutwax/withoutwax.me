import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import Content, { HTMLContent } from '../components/Content';

// import Resume from '../pages/about/resume/resume';
// import { prototype } from 'module';

export const AboutPageTemplate = ({ aboutAbout }) => {
//   const PageContent = aboutAbout || Content

  return (
    <article>
        {aboutAbout.qna.map(about => (
            <div className="about-section" style={{ marginTop:"5px" }}>
                <h2>{about.question}</h2>
                <p>{about.answer}</p>
            </div>
        ))}
    </article>
  )
}

AboutPageTemplate.propTypes = {
    aboutAbout: PropTypes.array,
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        aboutAbout={frontmatter.aboutAbout}
      />
      <section>
        {/* <h1><span id="about-about-btn" className={this.state.aboutcssclass} onClick={this.aboutToggle} >About</span> <span id="about-resume-btn" className={this.state.resumecssclass} onClick={this.resumeToggle} >Resume</span></h1> */}

        {/* {content} */}
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
      }
    }
  }
`