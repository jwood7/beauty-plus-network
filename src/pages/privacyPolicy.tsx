// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage, IGatsbyImageData} from 'gatsby-plugin-image'
import HeroBannerImage from '../components/heroBanner'
import {pageMain, moreQuestions, pagePrivacy, faqBanner} from './pages.module.css'
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
const faqPage = ({data}: PageProps) => {
  return (
    <Layout pageTitle={"Our commitment to privacy"}>
        <HeroBannerImage
            alt="Blurry image of a Beauty Plus salon with the word hope visible in the mirror"
            imageData={data.file.childImageSharp.gatsbyImageData}
            title="Our commitment to privacy"
            className={faqBanner}
        />

        <div className={`${pagePrivacy}`}>
            <h1><strong>Our commitment to privacy</strong></h1>
            <p>
                Beauty+ Network values our users and their privacy. 
                We appreciate your trust that we will do so carefully. 
                The information below explains our policy regarding your online and offline privacy. 
                By visiting Beautyplusnetwork.org or sharing personal information with Beauty+ Network you are accepting the practices demonstrated in this Privacy Notice.
            </p>
            <p>
            When you visit our website or make a donation online or offline, you may provide us with personal information (such as name, email address, address, and/or credit/debit card information) that you knowingly choose to disclose. 
            The purposes of collecting the information include registering to receive email newsletters or other materials, requesting further information from us about projects and services, ordering merchandise, donating to us, or simply asking a question. 
            We receive and store any information you enter on our website or give us in any other online and offline ways. 
            We ask for personal information to fulfill your request and reply your messages. 
            Beauty+ Network does not collect personal information from you unless you provide it to us, and this information is retained and used in accordance with existing laws, rules, regulations, and other policies.  
            If you choose not to provide any of that information, we may not be able to fulfill your request or complete your order, but you will still be free to browse the other sections of the websites without telling us who you are or revealing any personally identifiable information about yourself.
            </p>
            <p><strong>The way we use information</strong></p>
            <p>When you provide your personal information for a specific purpose, we use the information for only that purpose (such as to provide the service or information you have requested).</p>
            <p>We use the information we collect and receive for the following general purposes:</p>
            <ul>
                <li>to be part of e-mail and other communications among members of the program;</li>
                <li>To help us improve the content and functionality of our website;</li>
                <li>To better understand your interests and to contact you in the future to tell you about services we believe will be of interest to you;</li>
                <li>To conduct research on our users’ demographics, interests, and behaviors;</li>
                <li>To respond to your questions and assist with any problems with our Services;</li>
                <li>To process and fulfill the orders you place with us; and</li>
                <li>For any other purpose disclosed to you at the time we collect the information, or otherwise with your consent.</li>
            </ul>
            <p>Beauty+ Network does not sell, give-away, rent or share its email addresses or other personal contact information with outside sources. Beauty+ Network does not send mailings on behalf of other organizations either.</p>
            <p>If any material changes are made to the ways in which we use personally identifiable information, Beauty+ Network will take commercially reasonable measures to obtain written or email consent from you. We will also post the changes to our use of personally identifiable information on our website at least 30 days prior to a change.</p>
            <p><strong>Our commitment to data security</strong></p>
            <p>Personally identifiable information is stored on our server and is not publicly accessible. Only Beauty+ Network personnel is able to access personally identifiable information on a “need to know” basis. Additionally, sensitive data such as credit card numbers are encrypted using SSL and other industry standard measures, to provide an additional level of security.</p>
            <p><strong>Choice/opt-out</strong></p>
            <p>If you no longer want to receive communications from us after registered, you can unsubscribe from our contact list by clicking on the “unsubscribe” button in our newsletter. You may also contact us to have your name and contact information removed from our distribution lists. You have the following options to do this:</p>
            <p>You can send an email to: <a href="mailto:info@beautyplusnetwork.org">info@beautyplusnetwork.org</a></p>
            <p><strong>Correct/update:</strong></p>
            <p>If you would like to make corrections to the data you provide to us, you may contact us directly at the email provided above.</p>
            <p><strong>What anonymous information is collected by Beauty+ Network?</strong></p>
            <p>Anonymous information is collected for every visitor and donors to this site. This includes pages viewed, date and time, and browser type. We do not store IP numbers, but they are temporarily used to determine domain type and in some cases, geographic region. We do not make any association between this information and a donor or visitor’s identity.</p>
            <p><strong>How does this site use cookies?</strong></p>
            <p>Cookies are simple text files stored by your web browser. Beauty+ Network uses cookies to identify your browser as you visit pages on the Beauty+ Network website, but cookies created on your computer by using our website do not contain personally identifiable information or compromise your privacy or security. Cookies allow Beauty+ Network to gather anonymous information and allow Beauty+ Network to provide more relevant content as you travel through our sites. Cookies are also used on our ordering website to keep track of the items in your shopping cart.</p>
            <p><strong>Online or offline registration information</strong></p>
            <p>You will provide information about yourself and your organization to us when you register for fundraising, donations and buy products. This information will only be used to fulfill your request and will not be shared with outside parties. However, information collected online or offline may be subject to examination and inspection if such information is a public record or not otherwise protected from disclosure.</p>
            <p><strong>Links</strong></p>
            <p>Beauty+ website may contain links to other websites not operated or controlled by us. These links do not imply that Beauty+ Network endorses or has reviewed the third party websites. Any such websites are not under our control, and we are not responsible for their privacy policies or practices. Please note that when you click on one of these links, you are entering another site. We encourage you to read the privacy statements of these linked websites as they may have different privacy policy.</p>
            <p><strong>Email Links</strong></p>
            <p>The email links located on this site allow you to contact us directly via email. We use the information provided in your email to respond to your questions or comments. We may also store your comments for future reference.</p>
            <p><strong>Changes to this privacy statement</strong></p>
            <p>Changing business practices and circumstances may require that we make changes to this privacy policy from time to time. Beauty+ Network reserves the right to modify its website and/or this Privacy Policy at any time, and donors and visitors are deemed to be apprised of and bound by any such modifications. Our goal is to provide all services to donors or visitors in an accessible, friendly and efficient manner while maintaining their privacy. Please contact us for any comments or questions you have about the privacy policy.</p>
            <p><strong>Legal disclaimer</strong></p>
            <p>There may be instances when we disclose your information to other parties to comply with or respond to the law or legal process or a request for cooperation by a government entity.</p>
            <p><strong>For more information</strong></p>
            <p>If you have any questions, concerns or comments about your privacy, please send us a description of your concern via email to <a href="mailto:info@beautyplusnetwork.org">info@beautyplusnetwork.org.</a></p>

    
        </div>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "beauty-privacy.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export const Head = () => <title>Privacy Policy « Beauty Plus Network</title>

export default faqPage