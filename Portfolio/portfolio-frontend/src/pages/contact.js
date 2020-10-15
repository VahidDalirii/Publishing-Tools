import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontaktsidan" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Kontakta mig</h3>
          {/* This is my post mrthod with my specific url which connects it to my account in Formspree */}
          <form action="https://formspree.io/mjvpgkyy" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="namn"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="epost"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="meddelande"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Kontakta mig
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact