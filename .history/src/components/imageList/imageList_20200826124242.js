import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    if(images === null){
        return(
            
        )
    }
    return(
            images.map((image) =>{
                return <div className="image-display">
                            <ImageCard  imageProp ={image}  key={image.id}  />
                        </div>
            })
        )

}

export default ImageList