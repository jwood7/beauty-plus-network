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
const busyPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty is power..."}>
        <HeroBannerImage
            alt="Beauty Plus Classroom"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="Giving Away"
            className={contactBanner}
        />

        <div className={`${pagePrivacy}`}>
            <h1>“Maintain what you have by giving it away…”</h1>
            <p>“I learned in life that the only way to maintain what you have is by giving it away,” said Nico, our Beauty+ educator. “Everything that has been shown to be and taught to me, I have been able to share with these girls, and I hope their skill level will be elevated to another level.”</p>
            <p>As a very accomplished stylist and educator from Bumble & bumble in NYC, Nico has been to Cambodia 4 times over the past 3 years to help train our students with the latest skills that keep their services unparalleled in Cambodia.</p>
            <figure>
                <StaticImage src= "../images/our-blog.jpg" alt="A training session at Beauty+" layout="fullWidth"/>
                <figcaption>A training session at Beauty+</figcaption>
            </figure>
            <p>Nico was very excited to give demonstrations and conduct hands-on classes for blow-drying, cutting and styling. “The girls’ strength lies in their openness, eagerness and skill level,”  said Nico. “Their sectioning was immaculate, and they picked up on the flat brush technique we were teaching them very quickly. Point-cutting was new for them, and they were very eager to begin the hands-on portion of our lessons.”</p>
            <figure>
                <StaticImage src= "../images/Nico-2.jpg" alt="A training session at Beauty+" layout="fullWidth"/>
                <figcaption>Nico enjoys giving and encouraging Beauty+ students to succeed.</figcaption>
            </figure>
            <p>Nico shared that even though his efforts were still small, the giving experience taught him that anything and anyone could help “with the words we speak and the actions we take.” And he will keep taking actions.</p>

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

export const Head = () => <title>"Maintain what you have by giving it away..." « Beauty Plus Network</title>

export default busyPage