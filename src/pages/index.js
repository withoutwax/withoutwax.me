import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';

export default () => (
    
    <div className="landing-container">
        <img src={logo} alt="logo" style={{ width:'25px' }}/>
        <br />
        <br />
        <div className="landing-container-link">
            <Link className="landing-container-link-link" to="/log"><span role="img" aria-label="camera">📷</span></Link>
            <Link className="landing-container-link-link" to="/code">Code</Link>
            <Link className="landing-container-link-link" to="/uiux">UIUX</Link>
            <Link className="landing-container-link-link" to="lab">Lab<span role="img" aria-label="hammer">🔨</span></Link>
            <Link className="landing-container-link-link" to="/about">Hi.<span role="img" aria-label="cheers">🙌🏼</span></Link>
        </div>
    </div>
    
);