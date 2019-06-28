import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="nav-container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              
              <Link className="navbar-item" activeClassName="active" to="/blog" style={{ fontWeight:"bold" }} >
                All
              </Link>
              <div className="navbar-sub">
                <Link className="navbar-item" to="/log" activeClassName="active">
                Log<span role="img" aria-label="camera">📷</span>
                </Link>
                <Link className="navbar-item" to="/code" activeClassName="active">
                  Code
                </Link>
                <Link className="navbar-item" to="/design" activeClassName="active">
                  Design
                </Link>
                <Link className="navbar-item" to="/lab" activeClassName="active">
                  Lab<span role="img" aria-label="hammer">🔨</span>
                </Link>
              </div>
              <Link className="navbar-item" to="/archive" activeClassName="active">
                <span role="img" aria-label="archive">🗄</span>
              </Link>
              <Link className="navbar-item" to="/about" activeClassName="active">
                About
              </Link>
              <Link className="navbar-item" to="/contact" activeClassName="active">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              {/* <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
