import React from 'react'


const SearchBar = () =>{
    return(
        <form onSubmit = {this.onSubmitHandler  }>
            <input type="text" 
            onChange ={ this.onChangeHandler } 
            value = {this.state.searchTerm}
            />
        </form>
    )
}

export defaut