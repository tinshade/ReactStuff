import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = () => {
  const APP_ID = 'c99efb85';
  const APP_KEY = 'f5596258a5ce0e046846e733607c9d7b';
  
  //Creating a state to store the 'recipes' array from the useEffect
  const [recipes, setRecipes] = useState([]); //API's state
  const [search, setSearch] = useState(""); //Search box'x state
  const [query, setQuery] = useState(''); //Search Button's state

  useEffect( () =>{
    getRecipes();
  }, [query]);
  //Array in useEffect will allow it to run only once upon render to avoid request spamming the API.

  //Function for getting results using the API
  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    //console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault(); //Disable page reload
    setQuery(search); //Get final typed string.
    setSearch(''); //Empty the search bar
  }

  return (
    <div className="container-fluid text-center">
      <section className="container-fluid hero-bd">
        <div className="herotext">
          <h1>Welcome to TASTIPIE</h1>
          <h4>Your go-to place for the best recipies</h4>
        </div>
      </section>
      <br/>
      <form onSubmit={getSearch} className="recipe">
        <div className="container p-2 mt-2 text-center">
          <img src="hlogo.png" className="img-fluid" alt="Logo"/>
        </div>
        
        <div className="container-fluid p-5 m-2">
          <input placeholder="Type in an ingredient!" value={search} onChange={updateSearch}/>
          <button className="btn" type="submit"><i className="fas fa-search"></i></button>
        </div>
      </form>
      <div className="container-fluid sec">
        <div className="row">
          {
            query === "" && recipes.length < 1
            &&
            <div className="container text-center p-5 m-5 text-light">
              <h1>Try searching something! <i className="fas fa-utensils fa-spin"></i> </h1>
            </div>
          }

          {
            query !== "" && recipes.length === 0
            &&
            <div className="container text-center p-5 m-5 text-light">
              <h1 className="text-danger">Oops! No dishes found!  <i className="fas fa-utensils fa-2x"></i> </h1>
            </div>
          }
          {
            recipes.map(recipe => (
            <Recipe
              key = {recipe.recipe.label}
              title = {recipe.recipe.label}
              calories = {recipe.recipe.calories}
              image = {recipe.recipe.image}
              source = {recipe.recipe.source}
              serves = {recipe.recipe.yield}
              ingredients= {recipe.recipe.ingredients}
              url = {recipe.recipe.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
