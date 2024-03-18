// Step 1: Import React
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../../components/heroBanner'
import {rightRow, leftRow, rowText, button, orange, rowImage} from '../pages.module.css'


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
const TeamPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty Plus Network"}>
        <HeroBannerImage
            alt="Members of the Beauty+ Team smiling and posing for a photo"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="The Beauty+ Team"
            // className={faqBanner}
        />
        <p>Our team is comprised of a network of volunteers, professionals and local staff that empower our mission to succeed.</p>
        <div className={rightRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/doug-haircut.jpg" alt="Douglas" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Douglas R. Wood, Founder</h2>
                <p>Douglas spent over 17 years working in the global beauty industry, most notably with The Estée Lauder Companies where he learned the art and business of beauty. He is now an Executive Partner at Gartner, Inc. where he advises top leaders on best-in-class strategies, value realization and executive development. Both personally and professionally, Doug is dedicated to helping others achieve their goals and embrace their inner beauty.</p>
                <Link to="/its-a-human-issue" className={`${orange} ${button}`}>Doug's Inspiration</Link>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/sothearen.jpg" alt="Sothearen" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Sothearen, Salon Manager</h2>
                <p>Sothearen received her university degree from the Royal University of Phnom Penh where she studied business. After spending a few years working in the service industry, Sothearen decided she wanted to do more to help the distressed women in her country become more financially independent. That choice brought her to lead our team running the salon.</p>
            </div>
        </div>
        <div className={rightRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/torng-seav.png" alt="Torng Seav" layout="fullWidth" />
            </div>
            <div className={rowText}>
                <h2>Torng Seav, Stylist/Educator</h2>
                <p>Torng Seav has over 15 years of hairdressing experience in Cambodia. She spent many years working in Battamabang before moving to Siem Reap and joining the Vimean Beauty+ Team. Torng Seav has a lot of experience with Western and Asian hair and can provide valuable consultations for up-dos and weddings. With a heart of gold and a love of the trade, she enjoys working and growing in the team.</p>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "who-we-are.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>Our Team « Beauty Plus Network</title>

export default TeamPage