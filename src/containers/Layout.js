import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        style={{ fontStyle: 'normal', fontFamily: 'Public Sans' }}
        className="flex min-h-[100svh] flex-col items-center justify-center bg-[#ffffff] px-5 py-20 text-center font-bold"
      >
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
