import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

// import logo from '../img/logo.png';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './all.scss';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <main className="w-full">

        <div className="max-w-screen-md flex flex-col md:flex-row mx-auto">
          <Navbar />
          <section className="md:ml-40 mt-16 px-10">{children}</section>
        </div>

        <Footer />
      </main>
    )}
  />
)

export default TemplateWrapper;
