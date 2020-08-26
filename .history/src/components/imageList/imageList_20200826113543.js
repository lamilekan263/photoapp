import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(

            images.map((image) =>{
                return <div className="container">
                    <div className="image"></div>
                     <ImageCard  imageProp ={image}  key={image.id}  />
                </div>
                
               
            })
        )

}

export default ImageList