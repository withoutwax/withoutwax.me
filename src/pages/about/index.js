import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';
// import Helmet from 'react-helmet';
// import PageHelmet from '../../components/';

// Need to add a helmet for meta data

export class About extends React.Component {
    render() {
        return (
            
            <Layout>
                <section style={{ textAlign:"center" }}>
                    <h1>About</h1>
                    <br />
                    <h2 style={{ textTransform:"capitalize" }}>Hi. <span role="img" aria-label="cheers!">🙌🏼</span></h2>
                    <p>My name is Will and I am an UX Designer and Engineer who also enjoys studying the boundaries of Computer Science <span role="img" aria-label="MacBookPro">💻</span>, UIUX and Product Design <span role="img" aria-label="Paint">🎨</span></p>
                    <p>I also have special love for minimalism, technology and the nature <span role="img" aria-label="nature">🌱</span> Let's save the nature and make the <span role="img" aria-label="world">🌎</span> a better place.</p>
                    <p>Plus, I love <a href="http://wordwithoutwax.tumblr.com/" rel="noopener noreferrer" target="_blank">quotes</a> too.</p>
                    <p>Thank you for visiting!</p>
                    <br />
                    <br />
                    <Link to="/about/withoutwax/" alt="withoutwax">
                        without wax
                    </Link>,
                    <p>Will Kim</p>
                </section>
            </Layout>
            
        );
    };
}

export default About;