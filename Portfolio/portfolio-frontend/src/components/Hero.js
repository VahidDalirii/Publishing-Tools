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
            <h1>Vahid Daliri</h1>
            <div className="underline"></div>
            <br/>
            <h4>Systemutvecklare på Centiro Solutions</h4>
            <br/>
            - Jag arbetar för närvarande på Centiro Solutions som systemutvecklare
            <br /><br/>
            - Tekniska kompetenser:{" "}   
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dotnet.microsoft.com/"
            >
             .NET
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dotnet.microsoft.com/apps/aspnet"
            >
              ASP.NET
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
              href="https://www.microsoft.com/en-us/sql-server/sql-server-2019"
            >
              MSSQL
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/"
            >
              MongoDB
              </a>{" "}
            ,{" "}
            <br /><br/>
            - Versionskontrollsystem:{" "} 
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://azure.microsoft.com/en-us/services/devops/"
            >
              Azure DevOps
            </a>{" "}
            och {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://azure.microsoft.com/en-us/services/devops/"
            >
              Git
            </a>{" "}
            <br /><br/>
            - Intressen: Gymma, Simma, Spela Tennis
            <br /><br/>
            <Link to="/contact" className="btn">
              Kontakta mig
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