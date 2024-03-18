// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../components/heroBanner'
import HeroImage from '../components/hero'
import {pageMain, contactLink, pageContact, contactBanner} from './pages.module.css'


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
const IndexPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty Plus Network"}>
      <HeroBannerImage
        alt="Four Beauty Plus Students with their hands in the air"
        imageData={data.file.childImageSharp.gatsbyImageData}
        title="Contact Us"
        className={contactBanner}
      />

      <div className={`${pageMain} ${pageContact}`}>
        <h1>We hope to hear from you...</h1>
        <p>Have <strong>questions?</strong> Want to <strong>connect</strong>? Or just want to leave us an <strong>encouraging message</strong>? Please reach  out to us by email <a className={contactLink} href="mailto: info@beautyplusnetwork.org">info@beautyplusnetwork.org.</a></p>
        <p>Plus, if you come to Siem Reap, Cambodia, we hope to welcome you at our <a className={contactLink} href="https://www.royalbeautynail.com/">Royal Beauty Salon</a> or <a className={contactLink} href="https://www.facebook.com/LuxurybeautyTV" >Luxury Beauty Art Salon</a>.</p>
        <p>With Love,</p>
        <StaticImage src= "../images/Beauty-Plus-Logo.png" width={400} alt="Beauty Plus Logo" />
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

export const Head = () => <title>Contact Us  « Beauty Plus Network</title>

export default IndexPage