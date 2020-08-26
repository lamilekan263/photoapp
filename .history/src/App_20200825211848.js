import React from 'react';
import axios from 'axios'

import SearchBar from './components/searchBar/searchBar'

class App extends React.Component{


    submitHandler = (term) =>{
        const response = axios.get('https://api.unsplash.com/search/photos', {
            params:{
                query: term
            }
            headers:{
                Authorization: 'Client-ID YOUR_ACCESS_KEY
                '
            }
        })
    }
    render(){
        return(
            <SearchBar onSubmit = {this.submitHandler}/>
        )
    }
}



export default App