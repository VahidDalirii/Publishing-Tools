import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      {/* SEO for search engines to find if search is similar project's description field */}
      <SEO title="Projekt" description="Projektsidan" />
      <section className="project-page">
        <Projects projects={projects} title="Alla projekt" />
      </section>
    </Layout>
  )
}

//graphgl query to get all projects info from strapi and sorts them by descending
export const query = graphql`
  {
    allStrapiProjects(sort: { fields: strapiId, order: DESC }){
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage