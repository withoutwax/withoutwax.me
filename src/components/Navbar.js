import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.png';
// import Footer from '../components/Footer';

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
        <Link className="my-2" to="/blog" title="Blog" >
          {/* <img src={logo} alt="logo" style={{ width:'13px' }}/> */}
          <span role="img" aria-label="thoughts">💭</span>
        </Link>
        <Link className="my-2" to="/project" activeClassName="active">
          <span role="img" aria-label="project">🕹</span>
        </Link>
        <Link className="my-2" to="/about" activeClassName="active">
          <span role="img" aria-label="profile">👨🏻‍💻</span>
        </Link>
        <Link className="my-2" to="/contact" activeClassName="active">
        <span role="img" aria-label="mail">📬</span>
        </Link>
        <Link className="my-2" to="/archive" activeClassName="active">
          <span role="img" aria-label="archive">🗄</span>
        </Link>

        {/* <div className={`nav-container ${this.state.navBarActiveClass}`}>
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
        </div> */}
        {/* <Footer /> */}
      </nav>
    )
  }
}

export default Navbar
