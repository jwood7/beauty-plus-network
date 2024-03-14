import  React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText, 
    mainFooter,
    copyright, 
    footerImage,
    hiddenNav,
    navDesktop,
    navMobile,
    headerImage,
    hamburger,
  } from './layout.module.css'
import Dropdown from './dropdown'


  type LayoutProps = {
    pageTitle?: string,
    children?: React.ReactNode
  }

const Layout = ({pageTitle, children}: LayoutProps) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={container}>
            
            <header>
                <Link to="/" className="headerImage" ><StaticImage className="headerImage" alt="Beauty Plus Logo, links to home page" src="../images/Beauty-Plus-Logo.png" width={197} quality={100}/></Link>
                <nav className={navDesktop}>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/contactInfo" className={navLinkText}>Join Our Network</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/whoWeAre" className={navLinkText}>Who We Are</Link>▾
                            <div className={hiddenNav}>
                                <ul>
                                    <li><Link to="/whoWeAre" className={navLinkText}>Overview</Link></li>
                                    <li><Link to="/ourTeam" className={navLinkText}>Our Team</Link></li>
                                    <li><Link to="/ourTeam" className={navLinkText}>Our Educators</Link></li>
                                    <li><Link to="/ourTeam" className={navLinkText}>Our Graduates</Link></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/howItWorks" className={navLinkText}>How It Works</Link>▾
                            <div className={hiddenNav}>
                                <ul>
                                    <li><Link to="/howItWorks" className={navLinkText}>Overview</Link></li>
                                    <li><Link to="/howItWorks" className={navLinkText}>Business Model</Link></li>
                                    <li><Link to="/howItWorks" className={navLinkText}>Sustainable Network</Link></li>
                                    <li><Link to="/howItWorks" className={navLinkText}>Our Impact</Link></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/whyBeauty" className={navLinkText}>Why Beauty?</Link>
                        </li>
                        
                        
                    </ul>
                </nav>
                <button onClick={e => setOpen(!open)} className ={hamburger}>&#9776;</button>
               
                
            </header>
            {open && <nav className={navMobile}>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/whyBeauty" className={navLinkText}>WHY BEAUTY?</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Dropdown dropdownTitle="HOW IT WORKS" dropdownLink="/howItWorks" isLink ={true}>
                                <ul>
                                    <li><Link to="/howItWorks" className={navLinkText}>OVERVIEW</Link></li>
                                    <li><Link to="/howItWorks" className={navLinkText}>BUSINESS MODEL</Link></li>
                                    <li><Link to="/howItWorks" className={navLinkText}>SUSTAINABLE NETWORK</Link></li>
                                    <li><Link to="/howItWorks" className={navLinkText}>OUR IMPACT</Link></li>
                                </ul>
                            </Dropdown>
                        </li>
                        <li className={navLinkItem}>
                            <Dropdown dropdownTitle="WHO WE ARE" dropdownLink="/whoWeAre" isLink ={true}>
                                <ul>
                                    <li><Link to="/whoWeAre" className={navLinkText}>OVERVIEW</Link></li>
                                    <li><Link to="/ourTeam" className={navLinkText}>OUR TEAM</Link></li>
                                    <li><Link to="/ourTeam" className={navLinkText}>OUR EDUCATORS</Link></li>
                                    <li><Link to="/ourTeam" className={navLinkText}>OUR GRADUATES</Link></li>
                                </ul>
                            </Dropdown>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/contactInfo" className={navLinkText}>JOIN OUR NETWORK</Link>
                        </li>
                    </ul>
                </nav> }
            <main>
                {/* <h1 className={heading}>{pageTitle}</h1> */}
                {children}
            </main>
            <footer>
                <div className= {mainFooter}>
                    <div className= {footerImage}>
                        <Link to="/">
                            <StaticImage
                                alt="Beauty Plus Logo, links to home page"
                                src="../images/logo-icon.png"
                            />
                        </Link>
                    </div>
                    <ul>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/contactInfo"> Contact us</Link></li>
                    </ul>
                </div>
                <div className = {copyright}>
                    <ul>
                        <li>© 2021 Beauty Plus Network</li>
                        <li>ll Rights Resevered</li>
                        <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Layout