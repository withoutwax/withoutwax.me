import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ContactPageTemplate = ({ title, callout, email, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
        <div className="container">
            <div className="content" style={{ textAlign:"center" }}>
                <h1 style={{ textAlign:"center" }}>{title}</h1>
                
                <p><strong>{callout}</strong></p>
                {/* <p><strong>If you wish to contact me, please do so with the email below:</strong></p> */}

                <a className="mailto" href="mailto:rlagmlckd@gmail.com">{email}</a>
                
                <br />
                {/* <p>{body}</p> */}
                <PageContent className="content" content={content} />
                {/* <p>I will be able to reach you within 1 to 3 business days at maximum.</p>
                <p>If I did not reach you within those days, please do not be offended, I am either in a situation where I cannot check my mail system and will reply to you ASAP as I get connected.</p> */}

            </div>
        </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  callout: PropTypes.string,
  email: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        callout={post.frontmatter.callout}
        email={post.frontmatter.email}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        callout
        email
      }
    }
  }
`