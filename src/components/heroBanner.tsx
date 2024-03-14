import * as React from "react"
import { GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"
import { heroBanner, heroBannerImage, heroTitle } from './heroBanner.module.css';

type HeroProps = {
    imageData: IGatsbyImageData,
    alt: string,
    title?: string,
    className?: string
}

const HeroBannerImage = ({imageData, alt, title, className}: HeroProps) => {
    return (
        <div className= {`${heroBanner} ${className}`}>
            <GatsbyImage
            className={heroBannerImage}
            image={imageData}
            alt={alt}
            />
            <div className={heroTitle}>
                <div/>
                <h1>{title}</h1>
            </div>
            

        </div>

    )
}

export default HeroBannerImage;