import React from 'react';
import images from '../images/images'

const imageList = ({ image, imageSrc }) =>{
    return(
        image.map(im =>{
            return <images imageProp = {image}/>
        })
    )
}

export default imageList