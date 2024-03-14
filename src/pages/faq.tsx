// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../components/heroBanner'
import {pageMain, moreQuestions, pageFAQs, faqBanner} from './pages.module.css'
import Dropdown from '../components/dropdown'


type PageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

// Step 2: Define your component
const faqPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty Plus Network"}>
      <HeroBannerImage
        alt="Four Beauty Plus Students with their hands in the air"
        imageData={data.file.childImageSharp.gatsbyImageData}
        title="FAQs"
        className={faqBanner}
      />

      <div className={`${pageMain} ${pageFAQs}`}>
        <Dropdown
            dropdownTitle = "DO YOU TAKE DONATIONS?"
            isLink = {false}
            dropdownLink=''>
            <p>
            The Beauty+ Network accepts donations on a needs basis.
              If you are looking to support our cause, we can help pair you with a student or school that could benefit from your help.
              Please reach out to us at info@beautyplusnetwork.org.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "HOW CAN I BECOME A VOLUNTEER, AND WHAT IS A VOLUNTEER SUPPOSED TO DO?"
            isLink = {false}
            dropdownLink=''>
            <p>
            Volunteers can make many contributions based on their skills and desire to make a difference.  
            If you are interested in doing work on the ground at our Cambodia locations, please contact us at <a href="mailto:info@beautyplusnetwork.org">info@beautyplusnetwork.org</a>.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "WHY IS THE BEAUTY+ NETWORK DIFFERENT FROM CHARITIES?"
            isLink = {false}
            dropdownLink=''>
            <p>
            The Beauty+ Network builds social businesses and empowers young women living in poverty to become financially independent. 
            We do not just give money, we give valuable vocational training and community support that builds successful beauty professionals. 
            Each of our solutions also maintains themselves. 
            By ensuring each solution is a success on its own, we safeguard those we help against any loss of funding. 
            They can prosper with or without The Beauty+ Network. 
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "WHO ARE ELIGIBLE TO BECOME BEAUTY+ STUDENTS, AND HOW DO YOU REACH THEM?"
            isLink = {false}
            dropdownLink=''>
            <p>
            Our partner NGOs and the Cambodian Government provide us with interested students.  
            They are then interviewed and, if they are a fit, brought into our program.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "HOW DO GRADUATED STUDENTS GET MONEY TO START THEIR FIRST SALON?"
            isLink = {false}
            dropdownLink=''>
            <p>
            Many students receive a starter kit from their supporting NGO valued at around $700. 
            If a student does not have that level of support, The Beauty+ Network provides a no-interest, non-recourse loan to help them get started.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "WHAT IS THE PERCENTAGE OF STUDENTS WHO GET A JOB AFTER THE TRAINING?"
            isLink = {false}
            dropdownLink=''>
            <p>
            Right now we have a 100% job placement rate after graduation. 
            We ensure our graduates have a job when they leave our program.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "ARE BEAUTY SERVICES HIGHLY IN DEMAND IN THESE DEVELOPING AREAS?"
            isLink = {false}
            dropdownLink=''>
            <p>
            Beauty services are in demand in every part of the world. 
            Whether it is a rural community in Cambodia or fifth Avenue in New York City, 
            there is always demand for hair styling, makeup and other beauty services.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "WILL THE BEAUTY INDUSTRY GET SATURATED IN CAMBODIA IN THE FUTURE?"
            isLink = {false}
            dropdownLink=''>
            <p>
            No matter where you go in the world, there are new practitioners joining the workforce.  
            The beauty industry in each of our markets is no different. 
            The Beauty+ Network helps each graduate select a place that is best positioned for success. 
            This process ensures that they don’t directly compete with each other and do not move into a place where they may not be able to succeed.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "WILL THE BEAUTY+ NETWORK KEEP HELPING THESE YOUNG WOMEN EVEN IF THEY NO LONGER WANT TO WORK IN THIS FIELD? HOW?"
            isLink = {false}
            dropdownLink=''>
            <p>
            The Beauty+ Network maintains contact with all its graduates who request to become a part of the network. 
            Through these follow-up conversations, we make sure they are continuing to find success regardless of the path they choose. 
            It is our hope that they stay in the beauty profession, but our overall goal is their stability and financial independence. 
            We keep contact by ensuring our students all have a cell phone when they graduate. 
            This gives them a way to reach out for help and advice and our network a way to keep in touch.
            </p>
        </Dropdown>
        <Dropdown
            dropdownTitle = "WHAT’S THE AVERAGE YEARLY INCOME IN CAMBODIA?"
            isLink = {false}
            dropdownLink=''>
            <p>
            The average income for Cambodia is about $950 per year. 
            At that level of income, a person is able to have enough income for a place to stay and food to eat, but not much more.
            </p>
        </Dropdown>
        <div className={moreQuestions}>Have more questions? Please reach out to us on our social media channels or by email at info@beautyplusnetwork.org. We are happy to connect</div>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "beauty-excited.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>FAQs « Beauty Plus Network</title>

export default faqPage