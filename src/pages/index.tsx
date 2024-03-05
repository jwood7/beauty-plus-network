// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import HeroImage from '../components/hero'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      
      <HeroImage
        alt="Beauty Plus Student and Mentor Hugging"
        src="../images/beautyplus.jpg"
      >
        <h1>Having the power to earn a sustainabe income transforms lives. <br/>
        It transforms communities.<br/>
        The Beauty+ Network has enabled this over 10 years thanks to our partners.<br/>
        With the more than 500 women in our Network we work to make the world a more beautiful place.</h1>
      </HeroImage>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage