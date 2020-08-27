import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(
        <div className="image-display">{
            if(images === ''){}
            images.map((image) =>{
                return <ImageCard imageProp={image} />
            })
        }
        </div>
    )
}

export default ImageList