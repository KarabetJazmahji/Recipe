import React from 'react';
import SearchBar from './SearchBar';
import recipeapi from '../api/recipeapi';  
import RecipeList from './RecipeList';
import Footer from './Footer';



class App extends React.Component{
    state = { recipes : [] };
    onTermSubmit = async term => {
        const response = await recipeapi.get('/',{
            params: {
                q: term
            }
        });
        this.setState({recipes: response.data.results});
        console.log(response.data.results);
    };


    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
                <RecipeList recipes={this.state.recipes}></RecipeList>
                <Footer></Footer>
            </div>
        )
    }
}


export default App;