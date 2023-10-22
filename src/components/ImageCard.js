import React from "react"
import PropTypes from "prop-types";

const ImageCard = ({ title, imageUrl, children }) => {
    return (
        <figure className="w-[250px] overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <img className="w-full" src={imageUrl} alt={title} title={title} />
            <figcaption className="border-t-2 border-black p-4">
                {children}
            </figcaption>
        </figure>
    )
}

ImageCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default ImageCard