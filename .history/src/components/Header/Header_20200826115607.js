import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './Header.scss'

const ImageList = ({ images }) =>{
    return(
            images.map((image) =>{
                return <div className="image-display">
                            <ImageCard  imageProp ={image}  key={image.id}  />
                        </div>
            })
        )

}

export default ImageList