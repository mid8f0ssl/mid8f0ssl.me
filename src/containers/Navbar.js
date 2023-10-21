import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import socialIcons from '../SocialIcons'
import NavigationSocialButtonsList from '../compontents/NavigationSocialButtonsList'

const Navbar = () => {
  const { authorJson } = useStaticQuery(graphql`
    query {
      authorJson {
        social {
          github
          linkedin
          upwork
          instagram
        }
      }
    }
  `)

  const socialLinkItems = []
  Object.entries(authorJson.social).forEach(([key, value]) => {
    if (socialIcons[key]) {
      socialLinkItems.push({
        id: key,
        url: value,
        iconComponent: socialIcons[key]
      })
    }
  })

  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-white px-5 m500:h-16">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
        <Link className="text-3xl font-bold m500:text-xl" to={'/'}>
          The Vault
        </Link>
      </div>
      <NavigationSocialButtonsList items={socialLinkItems} />
    </nav>
  )
}

export default Navbar
