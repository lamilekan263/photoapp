import React from 'react';
import images from '../images/images'

const imageList = ({ imageSrc }) =>{
    
    return(
        <div>
            imageSrc.map((images) =>{
                return(
                    <images />
                )
            })
        </div>
    )
}

export default imageList