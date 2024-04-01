// Step 1: Import React
import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../../components/heroBanner'
import {rightRow, rightRowContainer, leftRow, rowText, button, orange, rowImage, educatorsBanner} from '../pages.module.css'


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
const TheBusinessModelPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"The Business Model"}>
        <HeroBannerImage
            alt="Beauty Plus hairdresser demonstrates a technique to students"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="The Business Model"
            className={educatorsBanner}
        />
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/sophion-loh.jpeg" alt="Beauty+ Educator and Students" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>The Beauty+ School</h2>
                <p>Provides “fit for purpose” cosmetology education and intern opportunities to young women who come from poverty in developing countries and enables them to achieve financial independence.</p>
            </div>
        </div>
        <div className={rightRowContainer}>
            <div className={rightRow}>
                <div className={rowImage}>
                    <StaticImage src= "../../images/a-big-network.jpg" alt="Large class of beauty+ students being taught" layout="fullWidth"/>
                </div>
                <div className={rowText}>
                    <h2>The Beauty+ Network</h2>
                    <p>Connects our students with successful Beauty+ graduates, global beauty professionals and impassioned supporters from around the world. Every year, beauty artisans come to teach at our beauty schools, where they educate while being inspired by local cultures.</p>
                </div>
            </div>
        </div>
        <div className={leftRow}>
            <div className={rowImage}>
                <StaticImage src= "../../images/beauty-door.jpg" alt="Glass front of Beauty+ salon" layout="fullWidth"/>
            </div>
            <div className={rowText}>
                <h2>The Beauty+ Salon</h2>
                <p>Provides high-end beauty services at locally competitive prices. Our salons offer internships and full-time job opportunities to our students to enable their success. As a sustainable social business, our salons work to be independently profitable. Each salon’s profit is invested back into the network to expand our training and grow the network.</p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g297390-d13657030-Reviews-Royal_Beauty_Nail_Spa-Siem_Reap_Siem_Reap_Province.html" className={`${orange} ${button}`}>Visit Our Salon</a>
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "business-model.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>How It Works « Beauty Plus Network</title>

export default TheBusinessModelPage