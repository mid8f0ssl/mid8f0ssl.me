import React from "react"
import propTypes from "prop-types"


const TimelineListContainer = ({ title, tagline, children }) => {
    return (
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-black heading_font">{title}</h1>
                <span className="text-gray-900 text-xl lg:text-2xl mt-4 mb-6 md:mb-8">{tagline}</span>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        <div className="border-2-2 absolute h-full border-green-50 border-8 opacity-0"></div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

TimelineListContainer.propTypes = {
    children: propTypes.node.isRequired,
    title: propTypes.string.isRequired
}

TimelineListContainer.defaultProps = {
    tagline: '',
}

export default TimelineListContainer