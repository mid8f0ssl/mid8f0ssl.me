import React from 'react'
import PropTypes from 'prop-types'

const SocialButton = ({ id, url, iconComponent }) => {
  return (
    <a
      target={'_blank'}
      className="ml-5 flex items-center justify-center rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      title={id}
      href={url}
      rel="noreferrer"
    >
      {iconComponent}
    </a>
  )
}

SocialButton.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  iconComponent: PropTypes.node.isRequired
}

export default SocialButton
