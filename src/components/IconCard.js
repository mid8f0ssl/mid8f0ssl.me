import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const IconCard = ({ title, iconComponent, to, colorClass, children }) => {
  return (
    <figure
      className={`w-[250px] overflow-hidden rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${colorClass}`}
    >
      <Link
        to={to}
        className="m-10 flex items-center justify-center transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        title={title}
      >
        {iconComponent}
      </Link>
      <figcaption className="border-t-2 border-black p-4">
        {children}
      </figcaption>
    </figure>
  )
}

IconCard.defaultProps = {
  colorClass: 'bg-white'
}

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  iconComponent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired
}

export default IconCard
