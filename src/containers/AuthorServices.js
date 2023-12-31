import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import _ from 'lodash'
import Block from '../components/Block'
import TimelineListContainer from '../components/TimelineListContainer'
import TimelineItemContainer from '../components/TimelineItemContainer'
import { regularTextColors } from '../FontColors'

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
  const randomFontColors = _.sampleSize(
    regularTextColors,
    authorJson.services.length
  )
  return (
    <Block name={'services'} extraClassNames={'bg-nb-skyblue'}>
      <TimelineListContainer
        title={'My Services'}
        tagline={'So, what can I do for you?'}
      >
        {authorJson.services.map((service) => {
          return (
            <TimelineItemContainer
              extraClasses={
                authorJson.services.indexOf(service) % 2
                  ? 'flex-row-reverse'
                  : ''
              }
              key={service.id}
            >
              <h4
                className={`mb-1 text-2xl font-bold md:text-5xl ${
                  randomFontColors[authorJson.services.indexOf(service)]
                }`}
              >
                {service.title}
              </h4>
              <br />
              <div className="text-900 flex flex-col gap-4 text-sm font-normal leading-snug text-opacity-100 md:text-base">
                <span className="mb-2">{service.description}</span>
              </div>
            </TimelineItemContainer>
          )
        })}
      </TimelineListContainer>
    </Block>
  )
}

export default AuthorServices
