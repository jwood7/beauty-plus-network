// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../components/heroBanner'
import {attribution, about, pagePrivacy, contactBanner} from './pages.module.css'


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
const sarahsHeroesPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"It's not a women's issue, it's a human issue..."}>
        <HeroBannerImage
            alt="Beauty Plus Classroom"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="Doug's Inspiration"
            className={contactBanner}
        />

        <div className={`${pagePrivacy}`}>
            <h1>“It’s not a women’s issue, it’s a human issue…”</h1>
            <p>When Doug Wood, the founder of The Beauty+ Network, was traveling in Cambodia in 2013, he met with a successful beauty entrepreneur. The young woman was a survivor of sex trafficking, and after rebuilding her life, she found new faith, started to learn about the beauty trade and opened her own salon. Instead of maximizing her personal profit, she decided to reinvest her earnings in helping other young women overcome poverty. She worked to provide beauty training to other young women with the hope that one day, her younger sisters would be able to change their lives too.</p>
            <figure>
                <StaticImage src= "../images/floating-river.jpg" alt="Cambodia" layout="fullWidth"/>
                <figcaption>Cambodia</figcaption>
            </figure>
            <p>Doug was moved and inspired by this little community. They had been through so much suffering and had so little, but yet gave it all to help each other – AND they were successful.</p>
            <p>After his experience in Cambodia, Doug wanted to amplify their success, but as a career business executive, he did not want to just “give” money. He wanted to create something sustainable that could perpetuate on its own.This approach would ensure that any project would not easily collapse or become dependent on sponsor donations to make ends meet.</p>
            <figure>
                <StaticImage src= "../images/doug-helping.jpg" alt="Doug is helping the students in The Beauty+ Network." layout="fullWidth"/>
                <figcaption>Doug is helping the students in The Beauty+ Network.</figcaption>
            </figure>
            <p>With the help of his wife and several other dedicated beauty professionals, Doug designed the Beauty+ Network social business model: a school and salon, backed by a network of established professionals. Doug believes that professionals from the global beauty industry can give young women in the program a competitive advantage in their local markets and beyond. In 2015, the first Beauty+ Salon in Cambodia became profitable, with all profits being reinvested back into the Beauty+ Network project. This was a monumental moment for Doug as he started to witness his vision becoming a reality.</p>
            <figure>
                <StaticImage src= "../images/vimean-beauty.jpg" alt="The Beauty+ Salon" layout="fullWidth"/>
                <figcaption>The Beauty+ Salon</figcaption>
            </figure>
            <p>When asked why he chose to empower women in developing countries, Doug answers, “I see how important women are to build a society that is stable. I firmly believe that color, gender and sexual preference have no bearing on how successful a person can be and should never be an excuse for denying the opportunity for education or employment.” As a father, a husband and a son, Doug believes that men need to join the discussion and “lean in” to build gender equality.  “It’s not a women’s issue,  it’s a human issue,” says Doug.</p>
            <p>Although the cost of conducting such a project is not high, the concept is quite new, and support is often hard to come by. But the program is very impactful, as we create a business that is economically and intellectually improving the community around it and breaking the mold of just giving money away to help those living in poverty.  </p>
            <p className={attribution}>- Douglas Wood, Founder of Beauty+ Network</p>
            <p className={about}><strong>About Doug:</strong> As a seasoned business technology leader, Doug knows that lasting success with technology only comes from the right mix of people, process and technology. His love for technology stems from the value it brings in connecting people while making their lives more fulfilling. His successes in business have resulted in millions of dollars in savings through strategy realization and focused project management. He can be reached at doug@beautyplusnetwork.org.</p>
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

export const Head = () => <title>"It's not a women's issue, it's a human issue..." « Beauty Plus Network</title>

export default sarahsHeroesPage