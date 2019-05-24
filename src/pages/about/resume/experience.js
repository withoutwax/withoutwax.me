import React from 'react';

const Experience = class extends React.Component {

    render() {
        const { company, position, date, location, description } = this.props;

        return (
                <div className="resume-experience">
                    <h4>{ company } <span className="resume-position">| { position }</span></h4>
                    <p className="resume-date">{ date } <span> &bull; </span><span>{ location }</span></p>
                    <p className="resume-description">{ description }</p>
                </div>
        );
    }
}

export default Experience;