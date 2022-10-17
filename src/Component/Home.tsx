import React from 'react'
import AboutSection from './AboutSection'
import Banner from './Banner'
import ProjectLatest from './ProjectLatest'
import ServiceSection from './ServiceSection'
import Skill from './Skill'

const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutSection/>
        <ServiceSection/>
        <ProjectLatest/>
        <Skill/>
    </div>
  )
}

export default Home