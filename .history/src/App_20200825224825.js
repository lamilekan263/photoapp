import React from 'react';
import axios from 'axios'


import ImageList from './components/imageList/imageList'
import SearchBar from './components/searchBar/searchBar'

class App extends React.Component{
    state = {
        myImages : []
    }

    submitHandler = async (term) =>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params:{
                query: term
            },
            headers:{
                Authorization: 'Client-ID _EmXfMw4Ntd6F7SPo61DuogZ6sF5nsEsRHfLanqGI0M'
            }
        })
        this.setState({myImages : response.data.results})
        console.log(this.state.myImages)
    }
    render(){
        return(
           <React.Fragment>
                <SearchBar onSubmit = {this.submitHandler}/>

                {/* <ImageList imageSrc ={this.state.myImages.url.raw} /> */}
           </React.Fragment>
        )
    }
}



export default App