// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import HeroImage from '../components/hero'
import {tripleColumn, columnItem, columnImg, pageMain, titleContainer} from './pages.module.css'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={"Beauty Plus Network"}>
      
      <HeroImage
        alt="Beauty Plus Student and Mentor Hugging"
        src="../images/beautyplus.jpg"
      >
        <h1>Having the power to earn a sustainabe income transforms lives. <br/>
        It transforms communities.<br/>
        The Beauty+ Network has enabled this over 10 years thanks to our partners.<br/>
        With the more than 500 women in our Network we work to make the world a more beautiful place.</h1>
      </HeroImage>

      <div className={pageMain}>
        <div className={titleContainer}>
          <h1>The Beauty+ Network</h1>
          <p>The Beauty+ Network is a nonprofit whose mission is to help young women living in poverty find their beauty and earn a sustainable income through the vocation of beauty.
            We do this by establishing salon social businesses that are empowered by established beauty professionals.</p>
        </div>
        <div className={tripleColumn}>
          <div className={columnItem}>
            <StaticImage className={columnImg} src="../images/icon1.jpg" alt="Icon of woman's hair in the shape of a heart" />
            <h2>4 Beauty+ Solutions</h2>
            <p>Our first salon solution in Siem Reap, Cambodia, has created 3 additional solutions by empowered graduates. 
              The Beauty+ Network perpetuates itself as our graduates open their own Beauty+ Solutions.</p>
          </div>
          <div className={columnItem}>
            <StaticImage className={columnImg} src="../images/icon2.jpg" alt="Icon of bar graph with an arrow going upwards" />
            <h2>Powerful Economic Impact</h2>
            <p>The Beauty+ Network measures our success by the economic impact we make.
              This is the savings after expenses generated by each of our graduates- money they are using to not only survive, but to get ahead.</p>
          </div>
          <div className={columnItem}>
            <StaticImage className={columnImg} src="../images/icon3.jpg" alt="Icon of a crowd of people" />
            <h2>Thousands Served</h2>
            <p>Our solutions are successful businesses. We give our students real-world working experience.
              Our mission is to make people feel beautiful inside and out.
              By offering high-end services for a good cause, our customers become some of our strongest supporters.</p>
          </div>

        </div>
      
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage