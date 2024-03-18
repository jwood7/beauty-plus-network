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
const EducatorsPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty Plus Network"}>
        <HeroBannerImage
            alt="Beauty+ Graduates"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="The Beauty+ Students"
            // className={faqBanner}
        />
        <p>Since opening its doors in 2013, our network has graduated over 500 students and trained many more. Some of our graduates have offered to tell their stories and share their success below.</p>
        <div className={rightRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/jasmine.jpg" alt="Jasmine" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Jasmine</h2>
                <p>Jasmine graduated our program in 2013 and now runs her own very successful business, Jasmine Beauty+. Jasmine got to know the Beauty+ Network with the help of local police and a social worker. She never imagined that she could learn beauty skills from international beauty professionals…</p>
                <Link to="/beauty-is-power/" className={`${orange} ${button}`}>Read Jasmine's Story</Link>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/seang-mey-seng.jpg" alt="Seang Mey Seng" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Seang Mey Seng</h2>
                <p>Seang Mey came to The Beauty+ Network through a partner NGO in Cambodia. She graduated in 2015 and now operates “Mey Mey Beauty+” in Siem Reap. “I want to have a bigger salon and a busy life,” said Seang Mey, “I hope I can save enough money to buy a front door for the salon and have a sofa inside.”</p>
                <Link to="/i-want-to-have-a-bigger-salon-and-busy-life" className={`${orange} ${button}`}>Read Seang Mey's Story</Link>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "beauty-students.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], transformOptions: {fit: COVER, cropFocus: SOUTH})
      }
    }
  }
`

export const Head = () => <title>Beauty+ Educators « Beauty Plus Network</title>

export default EducatorsPage