// TODO - NEED TO IMPLEMENT ARCHIVE SETTINGS

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
// import { black } from 'ansi-colors';

class ArchiveRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="">
        {posts &&
          posts.map(({ node: post }) => (
            <article className="blog-roll-item" key={post.id}>
              <Link className="blog-link" to={post.fields.slug}>
                <div className="blog-roll-category mb-2">
                  {post.frontmatter.category}
                </div>
                <div className="blog-roll-item-title">
                  {post.frontmatter.title}
                </div>
                <div className="blog-roll-meta">
                  <span> &bull; </span>
                  <span className="blog-roll-date">
                    {post.frontmatter.date}
                  </span>
                </div>
                <p>
                  {/* {post.excerpt} */}
                  {post.frontmatter.description}
                </p>
              </Link>
            </article>
          ))}
      </div>
    );
  }
}

ArchiveRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query ArchiveRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              archive: { eq: true }
            }
          }
        ) {
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
                category
                description
                archive
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ArchiveRoll data={data} count={count} />}
  />
);
