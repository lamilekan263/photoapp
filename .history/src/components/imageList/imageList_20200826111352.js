import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

const ImageList = ({ images }) =>{
    return(
        images.map((image) =>{
            return <ImageCard  imageProp{image} />
        })
    )
}

export default ImageList