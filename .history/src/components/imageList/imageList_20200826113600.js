import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(

            images.map((image) =>{
                return <div className="container">
                    <div className="image-display">
                     <ImageCard  imageProp ={image}  key={image.id}  />
                    </div>
                </div>
                
               
            })
        )

}

export default ImageList