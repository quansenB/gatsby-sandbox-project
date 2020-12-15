import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 /* style={{fontFamily:"Rubik", fontWeight:400}} */ class="font-one">Hi people</h1>
    <p /* style={{fontFamily:"Rubik", fontWeight:600}} */ class="font-one font-semibold font-sm">Welcome to your new Gatsby site.</p>
    <p /* style={{fontFamily:"Andika New Basic", fontWeight:400}} */ class="font-two">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage src="../../static/panda.jpg" loading="eager" alt="Gatsby Panda" layout="fluid" class="w-full h-auto" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
