import React from 'react'
import Block from '../components/Block'
import myPortrait from '../images/aboutme.jpg'
import {graphql, useStaticQuery} from "gatsby";

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
    facts.push(`My current position is ${authorJson.current.workplace.position} in  ${authorJson.current.workplace.name}.`)
    facts.push(`Skill Set: ${authorJson.technologies.join(', ')}.`)

    return (
        <Block name={'about'} extraClassNames={'bg-white'}>
            <div className="flex max-w-full sm:py-12 sm:px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 m-auto">
                    <div className="relative h-64 overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]  transition hover:shadow-none sm:h-full lg:order-last lg:h-full rounded-3xl">
                        <img alt="Ups, it's me!"
                             src={myPortrait}
                             width="1200" height="1200" className="inset-0 h-full w-full object-cover"/>
                    </div>
                    <div className="lg:py-24 text-left font-normal">
                        <h2 className="text-4xl font-bold text-black sm:text-6xl heading_font">About Myself</h2>
                        {facts.map((fact) => (
                            <p className="mt-8 text-gray-600 text-2xl">✨ {fact}</p>
                        ))}
                    </div>
                </div>
            </div>
        </Block>
    )
}

export default About
