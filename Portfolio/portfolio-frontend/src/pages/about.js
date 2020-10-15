import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/Vahid Daliri - CV.pdf"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //This is our about page
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      {/* SEO forsearch engines */}
      <SEO title="CV" description="Vahids CV" />
      <section className="about-page">
        <div className="section-center about-center">
          {/* Shows my CV image */}
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            {/* <Title title={title} />
                <p>{info}</p> */}
            <ReactMarkdown source={info} />
            <div className="about-stack">
              {/* loops through all stack which are my skills in this case and returns them*/}
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <br/>
            <div>
              {/* possibility to download CV */}
              <a href={downloadFile} download className="btn">
              Ladda ner fullständig CV
              </a>
              {` `}
              {/* Link as a button to contact me */}
            <Link to="/contact" className="btn">
              Kontakta mig
            </Link>
            </div>
          </article>
        </div>
        <></>
      </section>
    </Layout>
  )
}

//graphgl query to get all about info from strapi
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
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

export default About
