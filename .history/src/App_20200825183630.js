import React from 'react';
import axios from 'axios'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            images : []
        }
    }

    componentDidMount(){
        axios.get('https://api.unsplash')
    }
    render(){
        return(
            <div>Hello</div>
        )
    }
}



export default App