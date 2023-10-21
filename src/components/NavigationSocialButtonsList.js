import React from 'react'
import PropTypes from 'prop-types'
import SocialButton from './SocialButton'

const NavigationSocialButtonsList = ({ items }) => {
  const socialLinks = items.map((item) => {
    return <SocialButton key={item.id} {...item} />
  })
  return (
    <div className="mx-auto flex w-[1300px] max-w-full items-center justify-end">
      {socialLinks}
    </div>
  )
}

NavigationSocialButtonsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      iconComponent: PropTypes.node.isRequired
    })
  ).isRequired
}

export default NavigationSocialButtonsList
