import React from 'react';
import axios from 'axios'

import SearchBar from './components/searchBar/searchBar'

class App extends React.Component{


    submitHandler = (term) =>{
        consoel.log()
    }
    render(){
        return(
            <SearchBar onSubmit = {this.submitHandler}/>
        )
    }
}



export default App