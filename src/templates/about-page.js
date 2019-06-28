import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import Resume from '../pages/about/resume';
import { prototype } from 'module';

export const AboutPageTemplate = ({ title, callout, email, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <article>
        <div className="about-section" style={{ marginTop:"5px" }}>
            <h2>Hi. <span role="img" aria-label="cheers!">🙌🏼, </span> This is Will.</h2>
            <p>Welcome to my about page! I saw you were wondering who I am. Well, let me introduce myself! <span role="img" aria-label="smile">😊</span></p>
        </div>
    </article>
  )
}

AboutPageTemplate.propTypes = {
    aboutAbout: Prototype.shape({
        title: PropTypes.string,
        qna: PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string,
        }),
    }),
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        aboutAbout={frontmatter.aboutAbout}
      />
      <section>
        <h1><span id="about-about-btn" className={this.state.aboutcssclass} onClick={this.aboutToggle} >About</span> <span id="about-resume-btn" className={this.state.resumecssclass} onClick={this.resumeToggle} >Resume</span></h1>

        {content}
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