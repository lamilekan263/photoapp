import React from 'react';
import axios from 'axios'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm : ''
        }
    }

    onSubmitHandler = async (term)=> {
        term.preventDefault()
       const response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                params: term
            },
            Headers:{
                Authorization: 'Client-ID _EmXfMw4Ntd6F7SPo61DuogZ6sF5nsEsRHfLanqGI0M'
            }
        })
        console.log(resp)
    }
    onChangeHandler = (e) =>{
        this.setState({ searchTerm : e.target.value })
    }
    render(){
        return(
            <form onSubmit = {this.onSubmitHandler  }>
                <input type="text" 
                onChange ={ this.onChangeHandler } 
                value = {this.state.searchTerm}
                 />
            </form>
        )
    }
}



export default App