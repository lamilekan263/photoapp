import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

import './imageList.scss'

const ImageList = ({ images }) =>{
    return(
        <div className="image-display">{
            images === '' ? <div>
                hello world
            </div>:
            images.map((image) =>{
                return <ImageCard imageProp={image} />
            })
        }
        </div>
    )
}

export default ImageList