import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
//When we open a blog in index page it end up here and shows a specific blog page
const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, desc } = data.blog

  return (
    <Layout>
      {/* SEO for search engines to find if search is similar blog's description field */}
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          {/* A utton link to go to all articles page */}
          <Link to="/blog" className="btn center-btn">
            Alla artiklar
          </Link>
        </div>
      </section>
    </Layout>
  )
}

//Grapghql to get single blog from strapi when we open a blog
export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName