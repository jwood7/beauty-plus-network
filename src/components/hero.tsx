import * as React from "react"
import { GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"
import { hero, heroImage, heroChildren } from './hero.module.css';

type HeroProps = {
    imageData: IGatsbyImageData,
    alt: string,
    children?: React.ReactNode,
}

const HeroImage = ({imageData, alt, children}: HeroProps) => {
    return (
        <div className={hero}>
            <GatsbyImage
            className={heroImage}
            image={imageData}
            alt={alt}
            // placeholder="blurred"
            // layout="fullWidth"
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