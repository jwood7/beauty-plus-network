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
            title="Our Blog"
            className={contactBanner}
        />

        <div className={`${pagePrivacy}`}>
            <h1>“I want to have a bigger salon and a busy life…”</h1>
            <p>When Seang Mey was a child, she wanted to be a beautiful girl all the time, and her biggest dream was to become a hairdresser one day.</p>
            <p>Although Seang Mey had great passion in beauty industry, she didn’t have a chance to systematically learn about hairdressing or get to know various beauty products until she got into our Beauty+ School. She enjoyed every class here, and learning beauty skills from international professionals was a big step toward achieving her goal.</p>
            <StaticImage src= "../images/seang-mey-seng.jpg" alt="Seang Mey cutting a customer's hair" layout="fullWidth"/>
            <p>At first, without any knowledge or experience in beauty skills, Seang Mey found the program a little challenging, but she was not intimidated. She spent five hours every day learning, and gradually, she found her own pace.</p>
            <p>When Seang Mey faces problems in her job or needs to make big decisions, she usually goes to Ms. Sothearen, the local manager of Beauty+ Salon. Ms. Sothearen is Cambodian and speaks English fluently. She provides local support for the salon and also serves in the role of translator for international volunteers. “Ms. Sothearen understands people and always gives good advice to everyone in the salon. I love her,” said Seang Mey.</p>
            <p>Seang Mey decided to open her own salon after graduation. Her childhood dream came true, and now she is a confident and independent woman with great passion in her job. Seang Mey has also hired other Beauty Plus students. She feels this is her way to bring confidence to more girls, and she believes that beauty enhances people in many ways.</p>
            <p>“I want to have a bigger salon and a busy life,” said Seang Mey. “I hope I can save enough money to buy a front door for the salon and have a sofa inside,” said Seang Mey, as she talked about her future plan excitedly.</p>
            

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

export const Head = () => <title>"I want to have a bigger salon and a busy life" « Beauty Plus Network</title>

export default busyPage