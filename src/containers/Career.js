import React from 'react'
import _ from 'lodash'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Block from '../components/Block'
import TimelineListContainer from '../components/TimelineListContainer'
import TimelineItemContainer from '../components/TimelineItemContainer'

import { regularTextColors } from '../FontColors'

const Career = () => {
  const { careerJson, images } = useStaticQuery(graphql`
    query {
      careerJson {
        path {
          id
          organization
          position
          responsibilities
          startDate
          technologies
          url
          endDate
          description
        }
      }
      images: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
        edges {
          node {
            name
            relativeDirectory
            relativePath
            childImageSharp {
              gatsbyImageData(width: 100)
            }
          }
        }
      }
    }
  `)
  console.info(images.edges)
  const imageSources = images.edges.reduce((obj, edge) => {
    return {
      ...obj,
      [edge.node.name]: (
        <GatsbyImage
          className={'float-left '}
          alt={edge.node.name}
          image={edge.node.childImageSharp.gatsbyImageData}
        />
      )
    }
  }, {})

  console.log(imageSources)

  const shuffledColors = _.shuffle(regularTextColors)

  return (
    <Block name={'career'} extraClassNames={'bg-nb-light-salmon'}>
      <TimelineListContainer
        title={'Career Path'}
        tagline={'Valuable experience with a variety of projects.'}
      >
        {careerJson.path.map((career) => (
          <TimelineItemContainer
            extraClasses={
              careerJson.path.indexOf(career) % 2 ? 'flex-row-reverse' : ''
            }
            key={career.id}
          >
            {imageSources[career.id]}
            <span
              className={`mb-3 text-base ${
                shuffledColors[careerJson.path.indexOf(career)]
              }`}
            >
              {career.startDate} - {career.endDate}
            </span>
            <h4
              className={`mb-1 text-2xl md:text-5xl ${
                shuffledColors[careerJson.path.indexOf(career)]
              } heading_font font-bold`}
            >
              <a target={'_blank'} href={career.url} rel="noreferrer">
                {career.organization}
              </a>
            </h4>
            <h5 className="mb-4 text-xs font-semibold md:text-lg">
              {career.position.join(', ')}
            </h5>
            <div className="flex flex-col gap-3 text-sm leading-snug text-gray-700 text-opacity-100 md:text-base">
              {career.responsibilities.map((responsibility) => (
                <span className="mb-1" key={responsibility}>
                  {responsibility}
                </span>
              ))}
            </div>
          </TimelineItemContainer>
        ))}
      </TimelineListContainer>
    </Block>
  )
}

export default Career
