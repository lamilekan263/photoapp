import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(
        <div className="image-display">
            images.map((i))
        </div>
    )
}

export default ImageList