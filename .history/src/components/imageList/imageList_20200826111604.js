import React from 'react';
// import ImageCard from '../ImageCard/ImageCard'

const ImageList = ({ images }) =>{
    return(
        images.map((image) =>{
            return <Img  src={image.urls.regular} />
        })
    )
}

export default ImageList