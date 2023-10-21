import * as React from 'react'
import Layout from '../containers/Layout'
import SEO from '../containers/SEO'
import Preview from '../containers/Preview'

const IndexPage = () => {
  return (
    <Layout>
      <SEO pageTitle={'Home'} />
      <Preview />
    </Layout>
  )
}

export default IndexPage
