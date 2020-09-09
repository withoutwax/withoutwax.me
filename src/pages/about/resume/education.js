import React from "react";

const Education = class extends React.Component {
  render() {
    const {
      school,
      startDate,
      currentlyAttending,
      endDate,
      degree,
      major,
    } = this.props;

    return (
      <div className="resume-education">
        <h4 className="text-lg font-bold text-gray-500">
          {school} <span className="resume-education-degree">| {degree}</span>
        </h4>
        <p className="my-2">
          {degree} in <span className="resume-education-major">{major}</span>
        </p>
        <p className="my-2">
          {startDate} - {currentlyAttending ? "Present" : endDate}
        </p>
      </div>
    );
  }
};

export default Education;
