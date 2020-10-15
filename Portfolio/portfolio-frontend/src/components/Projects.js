import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {/* loops through all projects and returns projects with their id */}
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        //A button to go to projects page and see all saved projects
        <Link to="/projects" className="btn center-btn">
          Alla projekt
        </Link>
      )}
    </section>
  )
}

export default Projects