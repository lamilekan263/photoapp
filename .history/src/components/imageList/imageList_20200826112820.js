import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import 

const ImageList = ({ images }) =>{
    return(
        images.map((image) =>{
            return <ImageCard  imageProp ={image}  key={image.id}  />
        })
    )
}

export default ImageList