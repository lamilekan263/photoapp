import React from 'react';


const image = ({image }) =>{
    return(
        <div className="card" style="width: 18rem;">
            <img src={ image } className="card-img-top" alt="..." />
        </div>
    )
}

export default image