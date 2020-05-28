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
          <Link className="navbar-item" to="/archive" activeClassName="active">
            <span role="img" aria-label="archive">🗄</span>
          </Link>
          <Link className="navbar-item" to="/about" activeClassName="active">
            About
          </Link>
          <Link className="navbar-item" to="/contact" activeClassName="active">
            Contact
          </Link>
        </div>
        <Navbar />
        
        <div>{children}</div>
        <Footer />
      </div>
    )}
  />
)

export default TemplateWrapper
