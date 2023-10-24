import React from 'react'
import PropTypes from 'prop-types'

const TimelineItemContainer = ({ extraClasses, children }) => {
  return (
    <div
      className={`mb-8 flex w-full items-center justify-between ${extraClasses}`}
    >
      <div className="order-1 w-auto"></div>
      <div className="order-1 w-5/6 rounded-3xl border-2 border-black bg-white px-4 py-12 text-right shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:shadow-none">
        {children}
      </div>
    </div>
  )
}

TimelineItemContainer.propTypes = {
  children: PropTypes.node.isRequired,
  extraClasses: PropTypes.string
}

TimelineItemContainer.defaultProps = {
  extraClasses: ''
}
export default TimelineItemContainer
