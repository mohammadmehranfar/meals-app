import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import RandomMeal from './Components/RandomMeal/RandomMeal';
import Catagories from './Components/Catagories/Catagories';
import HomePage from './Components/HomePage/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path = '/' component = {HomePage}/>
                    <Route exact path = '/catagories' component = {Catagories}/>
                    <Route exact path = '/random' component = {RandomMeal}/>
                </Switch>
                <Footer/>
            </Router>   
        </div>
    );
};

export default App;