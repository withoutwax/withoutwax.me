import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="w-full md:w-40 text-2xl md:text-lg text-right flex flex-row justify-evenly md:justify-start md: md:flex-col p-4 pt-20 md:h-screen sticky md:fixed"
        role="navigation"
        aria-label="main-navigation"
      >
        {/* <div className="hamburger-menu"  >{this.state.Thoughtso}</div> */}

        {/* Hamburger Button */}
        {/* <button className={`hamburger hamburger--slider ${this.state.navBarActiveClass}`} onClick={() => this.toggleHamburger()} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button> */}
        <Link className="my-2" to="/blog" title="Blog">
          {/* <img src={logo} alt="logo" style={{ width:'13px' }}/> */}
          <span role="img" aria-label="thoughts">
            💭
          </span>
        </Link>
        <Link className="my-2" to="/project" activeClassName="active">
          <span role="img" aria-label="project">
            🕹
          </span>
        </Link>
        <Link className="my-2" to="/about" activeClassName="active">
          <span role="img" aria-label="profile">
            👨🏻‍💻
          </span>
        </Link>
        <Link className="my-2" to="/contact" activeClassName="active">
          <span role="img" aria-label="mail">
            📬
          </span>
        </Link>
        <Link className="my-2" to="/archive" activeClassName="active">
          <span role="img" aria-label="archive">
            🗄
          </span>
        </Link>
      </nav>
    );
  }
};

export default Navbar;
