import React from 'react';
import images from '../images/images'

const imageList = ({ image }) =>{
    return(
        image.map(im =>{
            return <images />
        })
    )
}

export default imageList