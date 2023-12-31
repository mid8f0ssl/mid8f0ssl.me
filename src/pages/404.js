import React from 'react'

import Layout from '../containers/Layout'
import SEO from '../containers/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO pageTitle={'404: Not found'} />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
