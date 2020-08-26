import React from 'react'
import {
    FormControl,
    FormLabel,

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
            <FormControl isRequired onSubmit = {this.onSubmitHandler>
                    <FormLabel htmlFor="fname">First name</FormLabel>
                    <Input id="fname" placeholder="First name" />
            </FormControl>

                <input type="text" 
                onChange ={ this.onChangeHandler } 
                value = {this.state.searchTerm}
                />
            </form>
        )
    }

}

export default SearchBar