import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import { Helmet } from "react-helmet";
// import TemplateWrapper from '../components/Layout';

import styled from "styled-components";

// import * as styles from './Index.module.scss';
// const LandingContainer = styled

// DO NOT DELETE - might need this code later if we do maintenance
// const ComingSoon = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;

//     min-height: 95vh;

//     font-size: 14px;
//     text-transform: uppercase;
//     font-weight: bold;

//     font-family: Arial, Helvetica, sans-serif;
//     color: #ff4470;
// `

const LandingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: 95vh;

  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;

  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #666666;
`;
const Thoughts = styled.img`
  width: 25px;
`;
const Links = styled.a`
  // Phone
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Tablet ----------- */
  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
  }
`;
const StyledLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  margin: 10px 20px;
  letter-spacing: 3px;
  color: #8c8c8c;

  &:hover {
    color: #ff4470;
  }
`;

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Will's Blog</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Helmet>
    <LandingPage>
      <Thoughts src={logo} alt="logo" />
      <br />
      <br />
      <Links className="landing-container-link">
        <StyledLink className="landing-container-link-link" to="/blog">
          <span role="img" aria-label="thoughts">
            💭
          </span>
        </StyledLink>
        <StyledLink className="landing-container-link-link" to="/about">
          <span role="img" aria-label="profile">
            👨🏻‍💻
          </span>
        </StyledLink>
        <StyledLink className="landing-container-link-link" to="/project">
          <span role="img" aria-label="project">
            🕹
          </span>
        </StyledLink>
        <StyledLink className="landing-container-link-link" to="/contact">
          <span role="img" aria-label="mail">
            📬
          </span>
        </StyledLink>
        <StyledLink className="landing-container-link-link" to="/archive">
          <span role="img" aria-label="archive">
            🗄
          </span>
        </StyledLink>
      </Links>
    </LandingPage>
    {/* <div className="landing-container">
            
        </div> */}

    {/* <ComingSoon>
            <div id="coming-soon">Coming Soon</div>
        </ComingSoon> */}
  </div>
);
