// Step 1: Import React
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../../components/heroBanner'
import {rightRow, rightRowContainer, leftRow, rowText, button, orange, rowImage} from '../pages.module.css'


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
const HowItWorksPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"How It Works"}>
        <HeroBannerImage
            alt="Beauty Plus educator and students smiling together"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="How It works"
            // className={faqBanner}
        />
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/how-it-works.png" alt="Diagram depicting educatos and supporters and a salon solution contributing to the beaty plus network. The beauty plus network is shown contributing to the salon solution. The salon solution takes in students and outputs graduate salons." layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>The Beauty+ Network</h2>
                <p>This is not just a charity, but a creator of sustainable social businesses. The Beauty+ Network does so much more than just provide beauty training – we link our students to the knowledge and people they need to succeed before and after they graduate.</p>
            </div>
        </div>
        <div className={rightRowContainer}>
            <div className={rightRow}>
                <div className={rowImage}>
                    <StaticImage src= "../../images/student-closeup.jpg" alt="Closeup of a student" layout="fullWidth"/>
                </div>
                <div className={rowText}>
                    <h2>The Business Model</h2>
                    <p>We connect our students with successful graduates, beauty professionals from around the world and other supporters through our School, our Network and our Salon.</p>
                    <Link to="/how-it-works/the-business-model/" className={`${orange} ${button}`}>See Our Model</Link>
                </div>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/group-heart.jpg" alt="Group of students making heart shapes with their hands" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>The Sustainable Network</h2>
                <p>The Beauty+ Network looks to build sustainable networks that grow organically in every country it operates in. The Beauty+Network Solution lets our graduates shape the future of beauty in their country!</p>
                <Link to="/how-it-works/the-sustainable-network/" className={`${orange} ${button}`}>Learn About Our Network</Link>
            </div>
        </div>
        <div className={rightRowContainer}>
            <div className={rightRow}>
                <div className={rowImage}>
                    <StaticImage src= "../../images/reflection.jpg" alt="reflection of the beauty+ logo" layout="fullWidth" />
                </div>
                <div className={rowText}>
                    <h2>How We Evolve</h2>
                    <p>From establishing the initial solution we continue to empower graduates to open their own microbusinesses. Our vision is to create more financial independence and open more opportunities for women through beauty.</p>
                </div>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/jasmine-beauty-1.jpg" alt="Beauty+ Graduates" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Our Impact</h2>
                <p>From our first program in Siem Riep, Cambodia, 3 students have started their own Beauty+ affiliated salon and hired Beauty+ School graduates as employees, while numerous others operate their own separate salon businesses or work in another salon.</p>
                <Link to="/how-it-works/our-impact/" className={`${orange} ${button}`}>See Our Impact</Link>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "how-works.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>How It Works « Beauty Plus Network</title>

export default HowItWorksPage