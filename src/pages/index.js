import * as React from 'react'
import Layout from '../containers/Layout'
import SEO from '../containers/SEO'
import Preview from '../containers/Preview'
import About from '../containers/About'
import Career from '../containers/Career'

const IndexPage = () => {
  return (
    <Layout>
      <SEO pageTitle={'Home'} />
      <Preview />
      <About />
      <Career />
    </Layout>
  )
}

export default IndexPage
