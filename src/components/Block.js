import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ name, extraClassNames, children }) => {
  const className = `flex w-11/12 items-center justify-center rounded-md border-2 border-black px-10 my-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m750:px-5 m750:py-10 ${extraClassNames}`
  return (
    <section id={name} className={className}>
      {children}
    </section>
  )
}

Block.defaultProps = {
  extraClassNames: ''
}

Block.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  extraClassNames: PropTypes.string
}

export default Block
