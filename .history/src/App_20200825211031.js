import React from 'react';
import axios from 'axios'

import SearchBar from './components/searchBar/searchBar'

class App extends React.Component{

    render(){
        return(
            <SearchBar onSubmit = {this.sub}/>
        )
    }
}



export default App