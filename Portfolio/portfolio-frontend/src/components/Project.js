import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        {/* if title is not supplied, set a defualt title */}
        <h3>{title || "Project"}</h3>
        <p className="project-description">{description}</p>
        {/* loops through a project and returns project with an id and title*/}
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          {/* Adds git icon as a link to git repository for this specific project */}
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          {/* I do not need web page url */}
          {/* <a href={url}>
            <FaShareSquare className="project-icon" />
          </a> */}
        </div>
      </div>
    </article>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  //url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project