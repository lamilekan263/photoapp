import React from 'react';
import axios from 'axios'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            images : []
        }
    }

    async componentDidMount (){
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query: 'cars'
            },
            Headers:{
                Authorization: 'Client-ID _EmXfMw4Ntd6F7SPo61DuogZ6sF5nsEsRHfLanqGI0M'
            }
        })

        console.log()
        
    }
    render(){
        return(
            <div>Hello</div>
        )
    }
}



export default App