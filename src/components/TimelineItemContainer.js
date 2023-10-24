import React from 'react'
import PropTypes from 'prop-types'

const TimelineItemContainer = ({ children }) => {
  return (
    <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
      <div className="order-1 w-auto"></div>
      <div className="order-1 w-5/6 rounded-3xl border-2 border-black bg-white px-4 py-12 text-right shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:shadow-none">
        {children}
      </div>
    </div>
  )
}

TimelineItemContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default TimelineItemContainer
