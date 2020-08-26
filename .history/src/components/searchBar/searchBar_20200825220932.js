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
    }
    render(){
        return(
            
            <form onSubmit = {this.onSubmitHandler  }>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div>
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