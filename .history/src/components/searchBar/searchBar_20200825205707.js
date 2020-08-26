import React from 'react'


class SearchBar extends React.Component{
    state = {
        searchTerm : ''
    }


    render(){
        return(
            <form onSubmit = {this.onSubmitHandler  }>
                <input type="text" 
                onChange ={ (e)=> this.setState{())} } 
                value = {this.state.searchTerm}
                />
            </form>
        )
    }

}

export default SearchBar