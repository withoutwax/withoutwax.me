import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';

import Resume from './resume/resume';
// import Helmet from 'react-helmet';
// import PageHelmet from '../../components/';

// Need to add a helmet for meta data

export class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: false,
            aboutcssclass: "focus-btn",
            resumecssclass: "unfocus-btn"
        }
        this.aboutToggle = this.aboutToggle.bind(this);
        this.resumeToggle = this.resumeToggle.bind(this);
    }

    aboutToggle = () => {
        this.setState({
            resume: false,
            aboutcssclass: "focus-btn",
            resumecssclass: "unfocus-btn"
        })
    }
    resumeToggle = () => {
        this.setState({
            resume: true,
            aboutcssclass: "unfocus-btn",
            resumecssclass: "focus-btn"
        })
    }

    render() {
        let content;

        if (this.state.resume == false) {
            content = 
                <article className="about-container">   
                    <div className="about-section" style={{ marginTop:"5px" }}>
                        <h2>Hi. <span role="img" aria-label="cheers!">🙌🏼, </span> This is Will.</h2>
                        <p>Welcome to my about page! I saw you were wondering who I am. Well, let me introduce myself! <span role="img" aria-label="smile">😊</span></p>
                    </div>
                
                    <div className="about-section">
                        <h2>Who are you?<span role="img" aria-label="programmer">👨🏻‍💻</span></h2>
                        <p>I am a Software Engineer <span role="img" aria-label="MacBookPro">💻</span> based in Chicago with background in Art and Design <span role="img" aria-label="Paint">🎨</span>. I attended <a  href="http://www.saic.edu/" rel="noopener noreferrer" target="_blank">School of the Art Institute of Chicago</a> for my Bachelors degree <span role="img" aria-label="graduation">🎓</span></p>
                    </div>
                    
                    <div className="about-section">
                        <h2>How did you start <span role="img" aria-label="MacBookPro">💻</span> coding?</h2>
                        <p>During my Sophomore year, there was an opening for a class called 'Object Oriented Programming.' I was curious to know what the class was and took it - and it changed my life. Since then, I've been coding and diving deeper into the world of programming. Now I am here!</p>
                    </div>

                    <div className="about-section">
                        <h2>What are you currently doing?</h2>
                        <p>Currently, I am working as a Web Developer in <a href="https://legioncollective.com/" rel="noopener noreferrer" target="_blank">Legion Collective</a>, a design agency based in Chicago. I often wear many hats, using different tech stacks, such as HTML, CSS, JavaScript, PHP, React, etc... When I am home, I normally work on my side projects <span role="img" aria-label="fun-projects">🕹</span>, build dev tools <span role="img" aria-label="tools">🛠</span> or fun games <span role="img" aria-label="game">👾</span></p>
                    </div>  

                    <div className="about-section">
                        <h2>Anything else? <span role="img" aria-label="thought">💭</span></h2>
                        <p>I have special love for minimalism, technology and the nature <span role="img" aria-label="nature">🌱</span> Let's save the nature and make the <span role="img" aria-label="world">🌎</span> a better place. Plus, I love <a href="http://wordwithoutwax.tumblr.com/" rel="noopener noreferrer" target="_blank">quotes</a> too.</p>
                    </div>

                    <div>
                        <p>Thanks for visiting! <span role="img" aria-label="cheers!">🙌🏼 </span></p>
                        <Link to="/about/withoutwax/" alt="withoutwax">
                            without wax
                        </Link>,
                        <p>Will Kim</p>
                    </div>
                </article>
            
        } else if (this.state.resume == true) {
            content = 
                <article id="about-resume">
                    <h2>Will Kim</h2>
                    <div>
                        
                        <Resume />
                        
                    </div>
                </article>
        }

        return (
            <Layout>
                <section>
                    <h1><span id="about-about-btn" className={this.state.aboutcssclass} onClick={this.aboutToggle} >About</span> <span id="about-resume-btn" className={this.state.resumecssclass} onClick={this.resumeToggle} >Resume</span></h1>

                    {content}
                    
                </section>
            </Layout>
        );
    };
}

export default About;