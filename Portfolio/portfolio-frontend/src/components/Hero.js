import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>I'm Vahid</h1>
            <div className="underline"></div>
            <h4>System developer at Centiro Solutions AB</h4>
            - 🔭 I’m currently working on Centiro Solutions as a backend developer
            <br />
            - 🌱 I’m currently learning React, Gatsby, GraphQL and Strapi
            <br />
            - 💬 Ask me about Space and Galexies
            <br />
            - 😄 Pronouns: Inquisitive, break the mold, responsible. <br />- 💜{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.microsoft.com/en-us/dotnet/csharp/"
            >
              C#
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.microsoft.com/en-us/sql-server/sql-server-2019"
            >
              MSSQL
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.javascript.com/"
            >
              Javascript
            </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/"
            >
              MongoDB
              </a>{" "}
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://azure.microsoft.com/en-us/services/devops/"
            >
              Azure DevOps
            </a>{" "}
            <br />
            - ⚡ Fun fact: I used to be a scientist :)
            <br />
            - 📫 How to reach me: use the link below
            <br />
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero