import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(

            images.map((image) =>{
                return <div className="container"></div>
                
                <ImageCard  imageProp ={image}  key={image.id}  />
            })
        )

}

export default ImageList