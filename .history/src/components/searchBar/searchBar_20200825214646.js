import React from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/core";


class SearchBar extends React.Component{
    state = {
        searchTerm : ''
    }

    onChangeHandler = (e) =>{
        this.setState({ searchTerm : e.target.value})
    }
    onSubmitHandler = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.onSubmitHandler  }>
                    <input type="text" 
                    onChange ={ this.onChangeHandler } 
                    value = {this.state.searchTerm}
                    />
                </form>
                <FormControl isRequired>
                    <FormLabel htmlFor="fname">First name</FormLabel>
                    <Input id="fname" placeholder="First name" />
                </FormControl>
            </div>
        )
    }

}

export default SearchBar