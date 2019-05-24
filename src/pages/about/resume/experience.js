import React from 'react';

const Experience = class extends React.Component {

    render() {
        const { company, position, date, description } = this.props;

        return (
                <div className="resume-experience">
                    <h4>{ company } <span className="resume-position">| { position }</span></h4>
                    <p className="resume-date">{ date }</p>
                    <p className="resume-description">{ description }</p>
                </div>
        );
    }
}

export default Experience;