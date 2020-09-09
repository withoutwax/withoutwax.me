import React from "react";

const Footer = class extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="md:ml-40 flex flex-col items-center">
        <p>Copyright &copy; {currentYear} Will Kim</p>
        <p>Invely's</p>
      </footer>
    );
  }
};

export default Footer;
