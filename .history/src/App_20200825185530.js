import React from 'react';
import axios from 'axios'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            images : []
        }
    }

    onSubmitHandler (){
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                params: 
            },
            Headers:{
                Authorization: 'Client-ID _EmXfMw4Ntd6F7SPo61DuogZ6sF5nsEsRHfLanqGI0M'
            }
        })
        
    }
    render(){
        return(
            <form onSubmit = {this.onSubmitHandler  }>
                <input type="text" 
                onChange ={ this.onChangeHandler } 
                value = {this.state.images}
                
                 />
            </form>
        )
    }
}



export default App