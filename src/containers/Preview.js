import React from 'react'
import Block from '../components/Block'
import IconCard from '../components/IconCard'
import { FaGripVertical, FaFileContract } from 'react-icons/fa'
import { Link } from 'gatsby'

const Preview = () => {
  return (
    <Block name={'about'} extraClassNames={'h-screen bg-nb-paleviolet'}>
      <div className="m-auto px-10 py-20 md:p-12 lg:px-10 lg:py-10">
        <div className="max-w-full text-center">
          <h2
            className="heading_font aos-init aos-animate text-4xl font-bold text-black sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <span>Welcome to the Fossil Vault</span>
          </h2>
        </div>
        <div className="my-8 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center md:my-12">
          <IconCard
            title="My Service"
            to={'/services'}
            colorClass={'bg-nb-crystal'}
            iconComponent={
              <FaGripVertical className="h-10 w-10 m500:h-8 m500:w-8" />
            }
          >
            <Link to={'/services'}>My Services</Link>
          </IconCard>
          <IconCard
            title="Github"
            to={'/'}
            colorClass={'bg-nb-crystal'}
            iconComponent={
              <FaFileContract className="h-10 w-10 m500:h-8 m500:w-8" />
            }
          >
            <Link to={'/'}>CV</Link>
          </IconCard>
        </div>
      </div>
    </Block>
  )
}

export default Preview
