import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';

import styled from 'styled-components';

// import * as styles from './Index.module.scss';
// const LandingContainer = styled

const ComingSoon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    min-height: 95vh;

    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;

    font-family: Arial, Helvetica, sans-serif;
    color: #ff4470;
`

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
`
const Logo = styled.img`
    width: 25px;
`
const Links = styled.a`
    display: flex;
    align-items: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 10px;
    letter-spacing: 3px;
    color: #8c8c8c;

    &:hover {
        color: #ff4470;
    }
`

export default () => (
    <div>
        <LandingPage>
            <Logo src={logo} alt="logo" />
            {/* <img src={logo}  style={{ width:'25px' }}/> */}
                <br />
                <br />
                <Links className="landing-container-link">
                    <StyledLink className="landing-container-link-link" to="/log"><span role="img" aria-label="camera">📷</span></StyledLink>
                    <StyledLink className="landing-container-link-link" to="/code">Code</StyledLink>
                    <StyledLink className="landing-container-link-link" to="/uiux">UIUX</StyledLink>
                    <StyledLink className="landing-container-link-link" to="lab">Lab<span role="img" aria-label="hammer">🔨</span></StyledLink>
                    <StyledLink className="landing-container-link-link" to="/about">Hi.<span role="img" aria-label="cheers">🙌🏼</span></StyledLink>
                </Links>
        </LandingPage>
        {/* <div className="landing-container">
            
        </div> */}
        
        {/* <ComingSoon>
            <div id="coming-soon">Coming Soon</div>
        </ComingSoon> */}
        
    </div>
);