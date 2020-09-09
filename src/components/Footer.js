import React from 'react'
// import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    let currentYear = new Date().getFullYear()
    return (
      <footer className="md:ml-40 flex flex-col items-center">
        <p>Copyright &copy; {currentYear} Will Kim</p>
        <p>Invely's</p>
      </footer>
    )
  }
}

export default Footer
