import React from 'react';

import './ImageCard.scss'

const ImageCard = ({ imageProp }) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={imageProp.urls.regular} className="card-img-top" alt={imageProp.alt_description} />
        </div>
    )
}

export default ImageCard