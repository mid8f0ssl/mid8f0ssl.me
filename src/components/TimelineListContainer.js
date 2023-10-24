import React from 'react'
import propTypes from 'prop-types'

const TimelineListContainer = ({ title, tagline, children }) => {
  return (
    <div className="container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
      <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
        <h1 className="heading_font text-4xl font-bold text-black md:text-5xl">
          {title}
        </h1>
        <span className="mb-6 mt-4 text-xl text-gray-900 md:mb-8 lg:text-2xl">
          {tagline}
        </span>
      </div>
      <div className="sticky ml-0 md:ml-12 lg:w-2/3">
        <div className="container mx-auto h-full w-full">
          <div className="wrap relative h-full overflow-hidden p-10">
            <div className="border-2-2 absolute h-full border-8 border-green-50 opacity-0"></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

TimelineListContainer.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  tagline: propTypes.string
}

TimelineListContainer.defaultProps = {
  tagline: ''
}

export default TimelineListContainer
