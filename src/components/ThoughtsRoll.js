import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class ThoughtsRoll extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="">
      {posts && (posts
          .map(({ node: post }) => (
            <div
              className=""
              key={post.id}
              style={{ marginBottom:"20px" }}
            >
            
              <article className="blog-roll-item" >
                <Link className="blog-link" to={post.fields.slug}>
                <div className="blog-roll-item-title">{post.frontmatter.title}</div>
                <div className="blog-roll-meta">
                  <span> &bull; </span>
                  <span className="blog-roll-date">{post.frontmatter.date}</span>
                </div>
                <p>
                  {/* {post.excerpt} */}
                  {post.frontmatter.description}
                </p>
                </Link>
              </article>
              
            </div>
          )))}
          </div>
    );
  }
}

ThoughtsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query ThoughtsRollQuery {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "blog-post"}, category: {eq: "Thoughts"}, archive: {eq: false}}}) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <ThoughtsRoll data={data} count={count} />
    )}
  />
)