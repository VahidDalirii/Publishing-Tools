import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

//Returns the navbar (In mobile form sidebar) with logo and all its links
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div id="top" className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo"/>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
