import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../containers/Layout'
import SEO from "../containers/SEO";

const IndexPage = () => {
  return (
    <Layout>
        <SEO pageTitle={`Home`}/>
    </Layout>
  )
}

export default IndexPage
