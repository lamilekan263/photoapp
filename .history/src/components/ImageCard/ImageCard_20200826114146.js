import React from 'react';

import './ImageCard.scss'

const ImageCard = ({ imageProp }) =>{
    return(
        <div className="card" >
            <img src={imageProp.urls.regular} className="card-img-top" alt={imageProp.alt_description} />
            <p>
        </div>
    )
}

export default ImageCard