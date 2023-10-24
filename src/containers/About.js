import React from 'react'
import Block from '../components/Block'
import myPortrait from '../images/aboutme.jpg'
import { graphql, useStaticQuery } from 'gatsby'

const About = () => {
  const { authorJson } = useStaticQuery(graphql`
    query {
      authorJson {
        fullName
        summary
        roles
        technologies
        current {
          workplace {
            name
            position
          }
        }
      }
    }
  `)
  const facts = []
  facts.push(`${authorJson.roles.join(', ')}.`)
  facts.push(authorJson.summary)
  facts.push(
    `My current position is ${authorJson.current.workplace.position} in  ${authorJson.current.workplace.name}.`
  )
  facts.push(`Skill Set: ${authorJson.technologies.join(', ')}.`)

  return (
    <Block name={'about'} extraClassNames={'bg-white'}>
      <div className="flex max-w-full sm:px-6 sm:py-12">
        <div className="m-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-3xl border-2 border-black  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:shadow-none sm:h-full lg:order-last lg:h-full">
            <img
              alt="Ups, it's me!"
              src={myPortrait}
              width="1200"
              height="1200"
              className="inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="text-left font-normal lg:py-24">
            <h2 className="heading_font text-4xl font-bold text-black sm:text-6xl">
              About Myself
            </h2>
            {facts.map((fact, index) => (
              <p key={index} className="mt-8 text-2xl text-gray-600">
                ✨ {fact}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Block>
  )
}

export default About
