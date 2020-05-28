import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        {/* <div className="hamburger-menu"  >{this.state.Logo}</div> */}

        {/* Hamburger Button */}
        <button className={`hamburger hamburger--slider ${this.state.navBarActiveClass}`} onClick={() => this.toggleHamburger()} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <div className={`nav-container ${this.state.navBarActiveClass}`}>
          {/* <Link className="navbar-item" activeClassName="active" to="/blog" style={{ fontWeight:"bold" }} >
            All
          </Link> */}
          <Link className="navbar-item" to="/log" activeClassName="active">
            Thoughts<span role="img" aria-label="camera">💭</span>
          </Link>
          <Link className="navbar-item" to="/code" activeClassName="active">
            Code<span role="img" aria-label="computer">💻</span>
          </Link>
          <Link className="navbar-item" to="/project" activeClassName="active">
            Project<span role="img" aria-label="project">🕹</span>
          </Link>
          <Link className="navbar-item" to="/lab" activeClassName="active">
            Lab<span role="img" aria-label="hammer">🔨</span>
          </Link>
          {/* <div className="navbar-sub">
          </div> */}
        </div>
      </nav>
    )
  }
}

export default Navbar
