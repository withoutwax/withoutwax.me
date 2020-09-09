import React from "react";

const Award = class extends React.Component {
  render() {
    const { title, date, description } = this.props;

    return (
      <div className="my-10">
        <h4 className="text-lg font-bold text-gray-500">{title}</h4>
        <p className="my-2">{description}</p>
        <p className="my-2">{date}</p>
      </div>
    );
  }
};

export default Award;
