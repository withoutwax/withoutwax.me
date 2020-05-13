import React from 'react';
// import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

import logo from '../img/logo.png';

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
      <div>
        <div className="header-container">
          <Link to="/" title="Logo" className="header-logo">
            <img src={logo} alt="logo" style={{ width:'13px' }}/>
          </Link>
          <Navbar />
        </div>
        
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
