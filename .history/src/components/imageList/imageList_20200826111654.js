import React from 'react';
// import ImageCard from '../ImageCard/ImageCard'

const ImageList = ({ images }) =>{
    return(
        images.map((image) =>{
            return <img  src={image.urls.regular} key={image.id} />
        })
    )
}

export default ImageList