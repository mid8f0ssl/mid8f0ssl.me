import * as React from 'react'
import { Link } from "gatsby"
import Layout from '../containers/Layout'
import SEO from "../containers/SEO";

const IndexPage = () => {
  return (
    <Layout>
        <SEO pageTitle={`Home`}/>
            <h1 className="text-5xl m800:text-3xl m400:text-xl">
                Neobrutalism components
            </h1>

            <p className="my-6 text-xl m800:text-lg m400:text-base">
                A collection of type-safe components written in React and Tailwind
            </p>
    </Layout>
  )
}

export default IndexPage
