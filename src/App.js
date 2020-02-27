import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DiscoverMoviesPage from './pages/DiscoverMoviesPage';
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <nav>
       <NavLink to ="/aboutpage" 
       activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>
  About this website</NavLink>
       <NavLink to ="/discovermoviespage"
         activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>
        Discover movies</NavLink>
     </nav>
     <Switch>
       <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
     </Switch> 
    </div>
  );
}

export default App;
