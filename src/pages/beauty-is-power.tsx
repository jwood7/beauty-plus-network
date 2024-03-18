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
const beautyIsPowerPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Beauty is power..."}>
        <HeroBannerImage
            alt="Beauty Plus Classroom"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="Our Blog"
            className={contactBanner}
        />

        <div className={`${pagePrivacy}`}>
            <h1>"Beauty is power..."</h1>
            <p>Jasmine lived with her family in a small roadside house in Siem Reap when she was a child. Since her family did not have enough money to support her further education, Jasmine decided to learn some beauty skills and hoped to be financially independent in the near future.</p>
            <p>At first, Jasmine got a job at a local salon, but she was treated unfairly by her coworkers there. Although she worked hard and was dedicated, people gossiped about her past experience and underestimated her. Jasmine was so upset that she left the salon, went back home and opened a small shop herself.</p>
            <p>When Jasmine was doubting whether the small shop would be her career destination, she got to know the Beauty+ Network with the help of local police and a social worker. Jasmine had never imagined that one day she could learn beauty skills from international beauty professionals, and for the first time, she got the opportunity to learn about customer services skills and English. Since the beauty training is “fit for purpose,” Jasmine didn’t find it too challenging. She loves this little community, in which classmates and educators never hesitate to give what they have to help others succeed.</p>
            <StaticImage src= "../images/jasmine-beauty-1.jpg" alt="Jasmine and other students" layout="fullWidth"/>
            <p>After graduation, Jasmine stayed to work full time at our Beauty Plus Salon. From then on, she was able to earn a stable salary and enjoy medical benefits. “Beauty+ Network changed my life,” Jasmine said. In 2014, Jasmine took a further step to achieve her greater ambition: She decided to open her own salon business. Because of her excellent customer services skills and good relationships with neighbors, Jasmine’s new salon became profitable at the end of the first month!</p>
            <p>Jasmine is now able to communicate with international customers in simple English, and she was grateful that our Beauty+ school prepared her for the larger market. “My next goal is to open a bigger salon and become a famous hairdresser,” Jasmine told the staff at the Beauty+ Network. She has a clear plan for her future, and this time, she is confident she will achieve it.</p>
            <StaticImage src= "../images/jasmine-beauty-2.jpg" alt="Jasmine stands with her workers in front of the sign for her salon" layout="fullWidth"/>


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

export const Head = () => <title>"Beauty is power..." « Beauty Plus Network</title>

export default beautyIsPowerPage