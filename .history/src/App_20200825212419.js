import React from 'react';
import axios from 'axios'

import SearchBar from './components/searchBar/searchBar'

class App extends React.Component{


    submitHandler = async (term) =>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{
                query: term
            },
            headers:{
                Authorization: 'Client-ID _EmXfMw4Ntd6F7SPo61DuogZ6sF5nsEsRHfLanqGI0M'
            }
        })
        console.log(response.data.results)
    }
    render(){
        return(
            <SearchBar onSubmit = {this.submitHandler}/>
        )
    }
}



export default App