import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
export default ({ data }) => {
  //console.log(data)
  //desctructure project nodes
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  //returnes all segments of my index page 
  return (
    <Layout>
      <SEO title="Hem" description="Startsidan" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Projekt i fokus" showLink />
      <Blogs blogs={blogs} title="Senaste artiklar" showLink />
    </Layout>
  )
}

//graphgl query to get 3 projects and 3 latest blogs info from strapi
export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(locale: "sv", formatString: "DD MMM YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
// ...GatsbyImageSharpFluid