import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {/* Shows all social links*/}
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          {/* Footer text */}
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Microsoft .NET Developer</span> | all rights reserved
        </h4>
      </div>
    </footer>
  )
}
export default Footer