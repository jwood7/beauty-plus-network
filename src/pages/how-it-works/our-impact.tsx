// Step 1: Import React
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../../components/heroBanner'
import {rightRow, rightRowContainer, leftRow, rowText, button, orange, rowImage, quotation} from '../pages.module.css'


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
const OurImpactPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"The Business Model"}>
        <HeroBannerImage
            alt="Siem Reap"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="Our Impact"
            // className={faqBanner}
        />
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/nico-cropped.jpg" alt="Beauty+ Educator and Students" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Social Impact</h2>
                <p>Since we opened our doors:</p>
                <ul>
                    <li>Over 600 students have completed the full-time Beauty+ training program and hands-on work experience at our salon.</li>
                    <li>Every year, more than 50 young women from local charities and state run programs attend our training program.</li>
                    <li>Our program now sponsors a rural elementrart school in the countryside giving our students a chance to also give back.</li>
                    <li>The vast majority of our graduates have been placed into jobs or successfully opened their own salons.</li>
                </ul>
            </div>
        </div>
        <div className={rightRowContainer}>
            <div className={rightRow}>
                <div className={rowImage}>
                    <StaticImage src= "../../images/vimean-beauty.jpg" alt="Students working in the Vimean Beauty salon" layout="fullWidth"/>
                </div>
                <div className={rowText}>
                    <h2>Business Success</h2>
                    <ul>
                        <li>Each year, our salons generate more than US$50K in revenue and serve thousands of customers.</li>
                        <li>Our program is self-sustaining:  the income from the salons supports our training</li>
                        <li>Over half of the salon’s customers are foreigners who want to support our cause or enjoy high-end beauty services on their travels.</li>
                        <li>We have a 5-Star TripAdvisor rating.</li>
                    </ul>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g297390-d13657030-Reviews-Royal_Beauty_Nail_Spa-Siem_Reap_Siem_Reap_Province.html" className={`${orange} ${button}`}>Visit Our Salon</a>
                </div>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/beauty-educators-cropped.jpg" alt="Glass front of Beauty+ salon" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Network Impact</h2>
                <ul>
                    <li>Fifteen beauty professionals from Hong Kong, Singapore and the United States have instructed at Beauty+ Schools.</li>
                    <li>Five local NGO members have volunteered and/or collaborated with our Beauty+ School to provide students with additional opportunities and activities.</li>
                    <li>Three students have started their own Beauty+ Network Salon, while another eight operate their own separate salon training businesses using the Beauty+ model</li>
                </ul>
            </div>
        </div>
        <p className={quotation}>“We’ve seen how everyone in our network tries to give, no matter if he or she is rich or poor, young or old, works at an international company or runs a small roadside shop. We’ve learned that true giving is never constrained by how much one has. We cherish every small effort people make to help the others because we believe everyone can help make the world a better place.”</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "Siem-Reap.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>Our Impact « Beauty Plus Network</title>

export default OurImpactPage