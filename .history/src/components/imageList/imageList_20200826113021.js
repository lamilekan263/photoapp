import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(
        <div className='container'>
            images.map((image) =>{
                return <ImageCard  imageProp ={image}  key={image.id}  />
            })
        )
        </div>
}

export default ImageList