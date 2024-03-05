import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { hero, heroImage, heroChildren, heroDarken } from './hero.module.css';

type HeroProps = {
    src: string,
    alt: string,
    children?: React.ReactNode,
}

const HeroImage = ({src, alt, children}: HeroProps) => {
  return (
    <div className={hero}>
        <StaticImage
        className={heroImage}
        src="../images/beautyplus.jpg"
        alt={alt}
        placeholder="blurred"
        layout="fullWidth"
        // aspectRatio={3 / 1}
        // formats={["auto", "webp", "avif"]}
        />
        <div className={heroChildren}>
            {children}
        </div>
        

    </div>

  )
}

export default HeroImage;