import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ pageDescription, lang, customMeta, pageTitle }) => {
    const { metaJson } = useStaticQuery(
        graphql`
      query {
          metaJson {
            title
            description
            author
          }
      }
    `
    )

    const currentPageDescription = pageDescription || metaJson?.description
    const currentPageTitle = pageTitle || 'Home'

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={currentPageTitle}
            titleTemplate={currentPageTitle ? `%s | ${metaJson?.title}` : null}
            meta={[
                {
                    name: `description`,
                    content: currentPageDescription,
                },
                {
                    property: `og:title`,
                    content: currentPageTitle,
                },
                {
                    property: `og:description`,
                    content: currentPageDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: metaJson?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: pageTitle,
                },
                {
                    name: `twitter:description`,
                    content: currentPageDescription,
                },
            ].concat(customMeta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    customMeta: [],
    pageDescription: ``,
}

SEO.propTypes = {
    pageDescription: PropTypes.string,
    lang: PropTypes.string,
    customMeta: PropTypes.arrayOf(PropTypes.object),
    pageTitle: PropTypes.string.isRequired,
}

export default SEO
