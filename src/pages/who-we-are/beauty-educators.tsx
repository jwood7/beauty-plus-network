// Step 1: Import React
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../../components/heroBanner'
import {rightRow, leftRow, rowText, button, orange, rowImage, educatorsBanner} from '../pages.module.css'


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
            alt="Members of the Beauty+ Team smiling and posing for a photo"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="The Beauty+ Team"
            className={educatorsBanner}
        />
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/cara-dannebale.jpeg" alt="Cara D'Annebale" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Cara D'Annebale</h2>
                <p>Our first live-in stylist, Cara, lived at the salon for 6 months teaching advanced hair styling techniques. Having worked for Bumble & bumble NYC for many years, Cara’s skills and education made her an excellent fit for this program. Cara greatly enhanced the skills of our students while improving the overall success of the salon. Cara hopes to go back to Cambodia in the near future to continue her work helping youth there.</p>
            </div>
        </div>
        <div className={rightRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/nico-aceves.jpg" alt="Nico Aceves" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Nico Aceves</h2>
                <p>Nico has been to Cambodia four times since our first salon opened to help educate our students. As a very accomplished stylist and educator from Bumble & bumble in NYC, Nico teaches our team the latest skills and keeps their services unparalleled in the Cambodian market.</p>
                <Link to="/maintain-what-you-have-by-giving-it-away" className={`${orange} ${button}`}>Giving Away</Link>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/sarah-rappolt.jpeg" alt="Sarah Rappolt" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>Sarah Rappolt</h2>
                <p>Sarah is the education manager Wonderland Beauty Parlor in NYC and has been to Cambodia three times to teach our students. Her fun personality and incredible experience working across a multitude of cultures has helped many of our students gain the skills they need to succeed.  As Sarah puts it, “Working with the Beauty+ Network has been as valuable to me as to the girls we get to teach. Poverty should never be the determining factor on whether you can get a great education and develop as a successful, fully functioning global citizen. Beauty+ has put my hope of everyone having a fair shake in life into action. It’s nice to be able to share 20 years of experience in the beauty industry with girls that are thirsty for knowledge.”</p>
                <Link to="/i-have-finally-found-my-hair-heroes" className={`${orange} ${button}`}>Sarah's Heroes</Link>
            </div>
        </div>
        <div className={rightRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/sophion-loh.jpeg" alt="Sophion Loh" layout="fullWidth" />
            </div>
            <div className={rowText}>
                <h2>Sophion Loh</h2>
                <p>An expert in makeup and beauty, Sophion worked with our students teaching them Bobbi Brown makeup essentials. Coming from Singapore, Sophion brought a great depth of knowledge and experience working with Asian skin and helped our students find looks that were right for their market. Sophion’s incredible sense of style and experience as a makeup educator helped our students become much more skilled in using makeup.</p>
            </div>
        </div>
        <p>Contact us at <a href="mailto:info@beautyplusnetwork.org">info@beautyplusnetwork.org </a>if you are interested in joining this awesome team.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "beauty-educators.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], transformOptions: {fit: COVER, cropFocus: SOUTH})
      }
    }
  }
`

export const Head = () => <title>Beauty+ Educators « Beauty Plus Network</title>

export default EducatorsPage