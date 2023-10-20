import React from 'react'
import PropTypes from "prop-types";


const BlockWrapper = ({ children }) => {
    return (
        <div className="flex w-full items-center justify-center rounded-md border-2 border-black bg-white px-10 py-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m750:px-5 m750:py-10">
            {children}
        </div>
    )
}

BlockWrapper.propTypes = {
    children: PropTypes.node.isRequired
}


export default BlockWrapper