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
                            <Link to="/contact-info" className={navLinkText}>Join Our Network</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/who-we-are" className={navLinkText}>Who We Are</Link>▾
                            <div className={hiddenNav}>
                                <ul>
                                    {/* <li><Link to="/who-we-are" className={navLinkText}>Overview</Link></li> */}
                                    <li><Link to="/who-we-are" className={navLinkText}>Our Team</Link></li>
                                    <li><Link to="/who-we-are/beauty-educators" className={navLinkText}>Our Educators</Link></li>
                                    <li><Link to="/who-we-are/beauty-students" className={navLinkText}>Our Graduates</Link></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/how-it-works" className={navLinkText}>How It Works</Link>▾
                            <div className={hiddenNav}>
                                <ul>
                                    <li><Link to="/how-it-works" className={navLinkText}>Overview</Link></li>
                                    <li><Link to="/how-it-works/the-business-model/" className={navLinkText}>Business Model</Link></li>
                                    <li><Link to="/how-it-works/the-sustainable-network/" className={navLinkText}>Sustainable Network</Link></li>
                                    <li><Link to="/how-it-works/our-impact/" className={navLinkText}>Our Impact</Link></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/why-beauty" className={navLinkText}>Why Beauty?</Link>
                        </li>
                        
                        
                    </ul>
                </nav>
                <button onClick={e => setOpen(!open)} className ={hamburger}>&#9776;</button>
               
                
            </header>
            {open && <nav className={navMobile}>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/why-beauty" className={navLinkText}>WHY BEAUTY?</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Dropdown dropdownTitle="HOW IT WORKS" dropdownLink="/how-it-works" isLink ={true}>
                                <ul>
                                    <li><Link to="/how-it-works" className={navLinkText}>OVERVIEW</Link></li>
                                    <li><Link to="/how-it-works/the-business-model/" className={navLinkText}>BUSINESS MODEL</Link></li>
                                    <li><Link to="/how-it-works/the-sustainable-network/" className={navLinkText}>SUSTAINABLE NETWORK</Link></li>
                                    <li><Link to="/how-it-works/our-impact/" className={navLinkText}>OUR IMPACT</Link></li>
                                </ul>
                            </Dropdown>
                        </li>
                        <li className={navLinkItem}>
                            <Dropdown dropdownTitle="WHO WE ARE" dropdownLink="/who-we-are" isLink ={true}>
                                <ul>
                                    {/* <li><Link to="/who-we-are" className={navLinkText}>OVERVIEW</Link></li> */}
                                    <li><Link to="/who-we-are" className={navLinkText}>OUR TEAM</Link></li>
                                    <li><Link to="/who-we-are/beauty-educators" className={navLinkText}>OUR EDUCATORS</Link></li>
                                    <li><Link to="/who-we-are/beauty-students" className={navLinkText}>OUR GRADUATES</Link></li>
                                </ul>
                            </Dropdown>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/contact-info" className={navLinkText}>JOIN OUR NETWORK</Link>
                        </li>
                    </ul>
                </nav> }
            <main>
                {/* <h1 className={heading}>{pageTitle}</h1> */}
                {children}
            </main>
            <footer>
                <div className= {mainFooter}>
                    {/* <div className= {footerImage}>
                        <Link to="/">
                            <StaticImage
                                alt="Beauty Plus Logo, links to home page"
                                src="../images/logo-icon.png"
                            />
                        </Link>
                    </div> */}
                    <ul>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/contact-info"> Contact us</Link></li>
                    </ul>
                </div>
                <div className = {copyright}>
                    <ul>
                        <li>© {new Date().getFullYear()} Beauty Plus Network</li>
                        <li>All Rights Resevered</li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Layout