import React from "react";
import PropTypes from "prop-types";


const TimelineItemContainer = ({ children }) => {
    return (
        <div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-auto"></div>
            <div className="order-1 w-5/6 px-4 py-12 text-right border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:shadow-none bg-white rounded-3xl">
                {children}
            </div>
        </div>
    )
}


TimelineItemContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TimelineItemContainer