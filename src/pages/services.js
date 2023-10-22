import React from "react"
import Layout from '../containers/Layout'
import SEO from '../containers/SEO'
import AuthorServices from "../containers/AuthorServices";

const Services = () => {
    return (
        <Layout title={"My Services"}>
            <SEO pageTitle={'My Services'} />
            <AuthorServices />
        </Layout>
    )
}

export default Services