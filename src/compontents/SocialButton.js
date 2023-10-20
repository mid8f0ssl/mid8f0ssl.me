import React from "react";
import PropTypes from "prop-types";


const SocialButton = ({ id, url, iconComponent }) => {
    return (
        <a
            className="flex items-center justify-center ml-5 rounded-md border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            target={"_blank"}
            title={id}
            href={url}>
            {iconComponent}
        </a>
    )
}

SocialButton.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    iconComponent: PropTypes.node.isRequired
}

export default SocialButton;