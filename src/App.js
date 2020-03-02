import React from 'react';
import './App.css';
import AboutPage from './pages/AboutPage';
import DiscoverMoviesPage from './pages/DiscoverMoviesPage';
import { Switch, Route, NavLink, useParams } from "react-router-dom";
import MoviePage from './pages/MoviePage';


function HomePage(){
  return (
    <h1>Homepage</h1>
  ) 
 }

function App() {
  return (
    <div className="App">
     <nav>
       <NavLink to="/">Homepage</NavLink>
       <NavLink to ="/about" 
       activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
  About this website</NavLink>
       <NavLink to ="/discover"
         activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        Discover movies</NavLink>
     </nav>
     <Switch>
        <Route path="/discover/:imdb_id" component={MoviePage} />
       <Route exact path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
     </Switch> 
    </div>
  );
}

export default App;
