import React from 'react';


const image = ({ imageProp }) =>{
    return(
        <div className="card" style={{width: 18rem;"}}>
            <img src={ imageProp } className="card-img-top" alt="..." />
        </div>
    )
}

export default image