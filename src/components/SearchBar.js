import React from 'react';
import '../App.css';



class SearchBar extends React.Component{
    state = {term: ''};

    onFormSubmit = (event)=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

    };

  
    render(){
        return(
        <div>
            <h1>Recipeeesssss</h1>
            <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label style={{fontSize: '20px' , paddingBottom: '10px'}}>Recipe Search</label>
                    <input type="text" placeholder="Search..." value={this.state.term} onChange={(e)=>{
                        this.setState({term: e.target.value})}}></input>
                </div>
            </form>
        </div>

        </div>
        )
    }
}

export default SearchBar;