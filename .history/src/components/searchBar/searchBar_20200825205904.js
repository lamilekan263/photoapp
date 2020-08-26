import React from 'react'


class SearchBar extends React.Component{
    state = {
        searchTerm : ''
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

export default SearchBar