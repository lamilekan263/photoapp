import React from 'react';
import images from '../images/images'

const imageList = ({ imageSrc }) =>{
    
    return(
        <div>
            imageSrc.map(images)
        </div>
    )
}

export default imageList