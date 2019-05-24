import React from 'react';

const Award = class extends React.Component {

    render() {
        const { title, date, achievement } = this.props;

        return (
                <div className="resume-award">
                    <h4>{ title }</h4>
                    <p style={{margin:"5px 0px"}}>{ achievement }</p>
                    <p className="resume-date">{ date }</p>
                </div>
        );
    }
}

export default Award;