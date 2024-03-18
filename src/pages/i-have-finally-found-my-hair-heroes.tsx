// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../components/heroBanner'
import {pageMain, moreQuestions, pagePrivacy, contactBanner} from './pages.module.css'
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
const sarahsHeroesPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty is power..."}>
        <HeroBannerImage
            alt="Beauty Plus Classroom"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="Our Blog"
            className={contactBanner}
        />

        <div className={`${pagePrivacy}`}>
            <h1>“I have finally found my hair heroes…”</h1>
            <p>“Start with a girl who comes here to learn how to say ‘yes’ and ‘no’ and express herself, how to love and learn a skill, be successful. I want the girls to have confidence in themselves. It’s developing them as people, that’s the most important.”</p>
            <p>Sarah Rappolt is among the very first educators who helped build Beauty+ Network by teaching and inspiring our girls to make great hair and lead great lives. “I had the opportunity to write and share a beauty curriculum for young girls in Siem Reap, Cambodia, who strived to grow out of extreme poverty,” said Sarah.</p>
            <figure>
                <StaticImage src= "../images/sarah-1.jpg" alt="Sarah is providing Beauty+ training for students" layout="fullWidth"/>
                <figcaption>Sarah is providing Beauty+ training for students.</figcaption>
            </figure>
            <p>“Sex trafficking and extreme poverty are a huge problem in Southeast Asia, and programs like this help young girls have the opportunity to learn a skill and make a good life for themselves and their families. Specifically, I developed a cutting and styling curriculum. I have been there 4 times so far for two-week classes to do the training. My last trip included training for the girls who have completed the program, to make it more sustainable in the long run.” Sarah was amazed by how easy it was to communicate. “How wonderful it is to take a trade you’ve mastered and teach it to someone halfway across the world- and not even speak the same language!” she wrote in her blog.</p>
            <p>During the training, Sarah asked the girls what type of music they wanted to hear. “Romantic music!” they said, and it struck a chord. “I realized the girls are not bitter about what happened to them,” she shared. “They still have hope and want to fall in love after all they have been through. I think I have finally found my hair heroes! These girls are so resilient and strong. They are not only surviving but flourishing and are well on their way to success.”</p>
            <figure>
                <StaticImage src= "../images/sarah-2nd.jpg" alt="Sarah has found her hair heroes..." layout="fullWidth"/>
                <figcaption>Sarah has found her hair heroes...</figcaption>
            </figure>
            <p>“I think this kind of work is super important because it allows us as an industry to take from the people who have and share with the have-nots. It evens the playing field and raises the bar of the industry globally. My theory on this and developing trade-up curriculum is that cash flow and circumstance should never be the determining factor of who has access to quality education,” said Sarah, with great enthusiasm.</p>

        </div>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "our-blog.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>"I have finally found my hair heroes..." « Beauty Plus Network</title>

export default sarahsHeroesPage