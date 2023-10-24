import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import Block from '../components/Block'
import TimelineListContainer from '../components/TimelineListContainer'
import TimelineItemContainer from '../components/TimelineItemContainer'
import fontColors from '../fontColors'

const AuthorServices = () => {
  const { authorJson } = useStaticQuery(graphql`
    query {
      authorJson {
        services {
          id
          title
          description
        }
      }
    }
  `)
  const randomFontColors = _.sampleSize(fontColors, authorJson.services.length)
  return (
    <Block name={'services'} extraClassNames={'bg-nb-skyblue'}>
      <TimelineListContainer
        title={'My Services'}
        tagline={'So, what can I do for you?'}
      >
        {authorJson.services.map((service) => (
          <TimelineItemContainer key={service.id}>
            <h4
              className={`mb-1 text-2xl md:text-5xl ${
                randomFontColors[authorJson.services.indexOf(service)]
              } heading_font font-bold`}
            >
              {service.title}
            </h4>
            <br />
            <div className="text-900 flex flex-col gap-4 text-sm font-normal leading-snug text-opacity-100 md:text-base">
              <span className="mb-2">{service.description}</span>
            </div>
          </TimelineItemContainer>
        ))}
      </TimelineListContainer>
    </Block>
  )
}

export default AuthorServices
