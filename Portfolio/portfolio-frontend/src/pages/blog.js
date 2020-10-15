import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      {/* SEO for search engines to find if search is similar blog's description field */}
      <SEO title="Bloggen" description="Bloggsidan" />
      <section className="blog-page">
        {/* A button to go to articles page to see all saved/uploaded atricles */}
        <Blogs blogs={blogs} title="Alla artiklar" />
      </section>
    </Layout>
  )
}

//graphgl query to get all blogs info from strapi
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
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

export default Blog