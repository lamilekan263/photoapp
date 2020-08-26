import React from 'react';
import axios from 'axios'

import SearchBar from './components/searchBar/searchBar'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            searchTerm : []
        }
    }


    render(){
        return(
            <SearchBar/>
        )
    }
}



export default App