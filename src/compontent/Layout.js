import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import metaQuery from '../queries/meta'

const Layout = ({ children }) => {
  console.log(metaQuery)
  const { metaJson } = useStaticQuery(graphql`${metaQuery}`)
  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout