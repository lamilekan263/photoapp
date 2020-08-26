import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

const ImageList = ({ images }) =>{
    return(
        images.map((image) =>{
            return <ImageCard  imageProp ={}src={image.urls.regular} key={image.id} alt={image.alt_description} />
        })
    )
}

export default ImageList