import React from 'react';


const ImageCard = ({ imageProp }) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={imageProp.urls.regular} className="card-img-top" alt={image.alt_description} />
        </div>
    )
}

export default ImageCard