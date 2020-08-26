import React from 'react'



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
        this.setState({searchTerm : ''})
    }
    render(){
        return(
            
            <form onSubmit = {this.onSubmitHandler  }>
                <div className="form-group">
                    <input type="text" 
                    className="form-control"
                    onChange ={ this.onChangeHandler } 
                    value = {this.state.searchTerm}
                    />
                </div>
            </form>
        )
    }

}

export default SearchBar