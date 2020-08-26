import React from 'react'


class SearchBar {
    return(
        <form onSubmit = {this.onSubmitHandler  }>
            <input type="text" 
            onChange ={ this.onChangeHandler } 
            value = {this.state.searchTerm}
            />
        </form>
    )
}

export default SearchBar