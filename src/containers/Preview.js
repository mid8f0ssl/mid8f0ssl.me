import React from 'react'
import Block from '../components/Block'

const Preview = () => {
  return (
    <Block name={'about'} extraClassNames={'h-screen bg-paleviolet'}>
      <h2 className="mb-5 text-2xl font-bold m400:text-xl">About</h2>
    </Block>
  )
}

export default Preview
