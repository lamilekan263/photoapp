import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(

            images.map((image) =>{
                return <div className="container">
                     <ImageCard  imageProp ={image}  key={image.idid}  />
                </div>
                
               
            })
        )

}

export default ImageList