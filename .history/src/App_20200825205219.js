import React from 'react';
import axios from 'axios'

import SearchBar from ''

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm : []
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
        console.log(response)
    }
    onChangeHandler = (e) =>{
        this.setState({ searchTerm : e.target.value })
    }
    render(){
        return(

        )
    }
}



export default App