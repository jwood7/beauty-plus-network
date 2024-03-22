// Step 1: Import React
import * as React from 'react'
import { graphql, Link} from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../../components/heroBanner'
import {orange, pink, button, pageSustainable, leftRow, emphasis, desc, dropContainer} from '../pages.module.css'
import Dropdown from '../../components/dropdown'


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
const networkPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"The Sustainable Network"}>
      <HeroBannerImage
        alt="Educator and Student form a heart with their hands"
        imageData={data.file.childImageSharp.gatsbyImageData}
        title="The Sustainable Network"
        // className={faqBanner}
      />

      <div className={`${pageSustainable}`}>
        <h1>Our graduates are shaping the future of their country.</h1>
        <p className={desc}>Beauty is something that emanates from the inside. Beauty is an enabler that opens doors, inside and out. In an industry where money and sales objectives cloud the art and heart of beauty, The Beauty+ Network rises to fill the void. Here we believe Beauty is a power that brings our women a better life, a better self. The Beauty+ Network looks to build sustainable networks that are owned by our graduates and grow organically in every country we operate in.</p>
        <div className={dropContainer}>
            <Dropdown
                dropdownTitle = 'STEP 1: ESTABLISH A BEAUTY+ SOLUTION IN AN “OFF-THE-BEATEN-PATH” DEVELOPING CITY'
                isLink = {false}
                dropdownLink=''>
                <StaticImage src= "../../images/vimean-beauty-salon.jpg" alt="The front door of the Vimean Beauty salon" layout="fullWidth"/>
                <p>
                The Beauty+ Network establishes a salon and training school in a developing city that is near an <strong>“off the beaten path” tourist attraction</strong>.
                This type of location helps bring beauty professionals and women in need together in a place that offers a great experience for our visitors as well as international exposure for our students.
                </p>
            </Dropdown>
            <Dropdown
                dropdownTitle = 'STEP 2: EXPAND THE NETWORK WITH SALONS RUN BY GRADUATES'
                isLink = {false}
                dropdownLink=''>
                <StaticImage src= "../../images/jasmine-beauty-2.jpg" alt="The Jasmine Beauty graduate salon team" layout="fullWidth"/>
                <p>
                As the salon grows, <strong>graduated students open their own salons</strong>, where they support and expand the network. 
                These new salons provide jobs and training to other women in need and graduates of the program.
                Currently, there are 3 graduated students <strong>operating their own Beauty+ salons</strong> in Cambodia.
                One of them has already started to <strong>train her own students</strong>.
                </p>
            </Dropdown>
            <Dropdown
                dropdownTitle = 'STEP 2: EXPAND THE NETWORK WITH SALONS RUN BY GRADUATES'
                isLink = {false}
                dropdownLink=''>
                <StaticImage src= "../../images/jasmine-beauty-salon.jpg" alt="The Jasmine Beauty graduate salon team" layout="fullWidth"/>
                <p>
                As the network grows, graduates from <strong>“daughter” salons will go on to open their own salons</strong>, and further expand the network. As the network in Cambodia grows, the Beauty+ team looks to <strong>repeat the process</strong> in more countries.
                </p>
                <div className={leftRow}>
                    <Link to="/beauty-is-power/" className={`${orange} ${button}`}>Read Jasmine's Story</Link>
                    <Link to="/i-want-to-have-a-bigger-salon-and-busy-life" className={`${pink} ${button}`}>Read Seang Mey's Story</Link>
                </div>
            </Dropdown>
        </div>
        <p className={emphasis}>We do more than just train our students, we connect them to the knowledge and people they need to succeed before and after they graduate.</p>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "beauty-in-action-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>The Sustainable Network « Beauty Plus Network</title>

export default networkPage