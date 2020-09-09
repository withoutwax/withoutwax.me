import React from "react";

const Volunteer = class extends React.Component {
  render() {
    const {
      organization,
      position,
      startDate,
      currentlyWorking,
      endDate,
      locations,
      description,
    } = this.props; // locations needs to be plural. 'location' seems to be a existing keyword.

    return (
      <div className="my-10">
        <h4 className="text-lg font-bold text-gray-500">
          {organization} <span className="resume-position">| {position}</span>
        </h4>
        <p className="my-2">
          {startDate} - {currentlyWorking ? "Present" : endDate}
          <span> &bull;</span> <span>{locations}</span>
        </p>
        <p className="my-2">{description}</p>
      </div>
    );
  }
};

export default Volunteer;
