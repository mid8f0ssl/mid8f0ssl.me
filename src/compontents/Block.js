import React from 'react'
import BlockWrapper from './BlockWrapper'
import PropTypes from "prop-types";


const Block = ({name, children, }) => {
    return (
        <div id={name} className="m400:text-sm">
            <h2 className="mb-5 text-2xl font-bold m400:text-xl">{name}</h2>

            <BlockWrapper>{children}</BlockWrapper>
        </div>
    )
}

Block.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
