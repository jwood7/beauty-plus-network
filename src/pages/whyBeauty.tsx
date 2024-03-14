import * as React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/hero'
import { Link, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { 
  whyBeautyHero, 
  red, 
  pink, 
  orange, 
  button, 
  stories, 
  tripleColumn, 
  columnItem,
  pageMain, 
  whyBeauty,
  oldStory,
  arrow,
  newStory,
} from './pages.module.css'

type PageProps = {
  data: {
    image1: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    },
    image2: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const WhyBeauty = ({data}:PageProps) => {
  return (
    <Layout pageTitle={"Why Beauty?"}>
      <div className= {whyBeauty}>
      <div className={whyBeautyHero}>
        <HeroImage
          alt="Silhouette of student cutting hair in front of beauty plus window"
          imageData={data.image1.childImageSharp.gatsbyImageData}
        >
          <h1>Why Beauty?</h1>
          <p>Beauty is something that emanates from within. Beauty is an enabler that opens doors, inside and out.
            In an industry where money and sales objectives cloud the art and heart of beauty, The Beauty+ Network rises to fill the void.</p>
          <p>Here we believe <strong>Beauty is a power</strong> that brings our women a <strong>better life</strong>, a <strong>better self</strong>.</p>
        </HeroImage>
      </div>
      <h2>Together we <strong>rewrite</strong> some stories</h2>
      <div className={stories}>
        <div className={oldStory}>"It is <strong>hard</strong> to be a woman"</div>
        <div className={arrow}>&#10140;</div>
        <div className={newStory}>"I am <strong>proud</strong> to be a woman"</div>
      </div>
      <div className={stories}>
        <div className={oldStory}><strong>25%</strong> of females ages 15-24 in developing countries have never completed primary school and lack the necessary skills to work.</div>
        <div className={arrow}>&#10140;</div>
        <div className={newStory}><strong>"I have an education"</strong><br/>The Beauty+ Network brings young women to class with training and love by professional educators.</div>
      </div>
      <div className={stories}>
        <div className={oldStory}><strong>70%</strong> of people in poverty worldwide are women.</div>
        <div className={arrow}>&#10140;</div>
        <div className={newStory}><strong>"I can feed my family"</strong><br/>The Beauty+ Network brings young women from poverty to stability by providing sustainable life skills and vocational training.</div>
      </div>
      <div className={stories}>
        <div className={oldStory}> Woman are often the <strong>victims</strong> of poverty-related trauma such as rape, abuse, trafficking, coerced prostitution, and more.</div>
        <div className={arrow}>&#10140;</div>
        <div className={newStory}><strong>“I am confident and powerful”</strong><br/>The Beauty+ Network is an enabler that opens doors, inside and out. Our women learn to appreciate their own inner beauty while they help make others feel beautiful too.</div>
      </div>
      <div className={whyBeautyHero}>
        <HeroImage
          alt="Instructor and Student making heart sign with hands"
          imageData={data.image2.childImageSharp.gatsbyImageData}
          >
            <h2>"I'm not alone"</h2>
            <p>Our women are a great part of network of professionals and graduates who are changing their communities and believe in the power of beauty.</p>
            <Link to="/howItWorks/ourImpact" className={`${pink} ${button}`}>See Our Impact</Link>
          </HeroImage>
      </div>
      <div className={pageMain}>
        <div className={tripleColumn}>
          <div className={columnItem}>
            <h2>"I can inspire others"</h2>
            <p>After graduating from our salon and working at Vimean Beauty+, Jasmine then opened her own business…</p>
            <Link to="/beautyIsPower" className={`${red} ${button}`}>Meet Jasmine</Link>
          </div>
          <div className={columnItem}>
            <h2>The Beauty+ Network</h2>
            <p>is made up of three focus areas: The Salon, The Network of Beauty Professionals, and The Training School...</p>
            <Link to="/howItWorks" className={`${orange} ${button}`}>How It Works</Link>
          </div>
          <div className={columnItem}>
            <h2>We make it as a team!</h2>
            <p>"I learned in life that the only way to maintain what you have is by giving it away." <br/> - Nico, beauty educator</p>
            <Link to="/whoWeAre" className={`${pink} ${button}`}>Meet Our Team</Link>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "beauty-in-action-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    image2: file(relativePath: { eq: "beauty-in-action-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>Why Beauty? « Beauty Plus Network</title>

export default WhyBeauty