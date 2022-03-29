import React, { useCallback, useContext,useState } from 'react';
import './HomePage.scss';
import { myContext } from '../Context/Context';
const HomePage = () => {
    const [value,setValue] = useState('');
    const {meals,fetchHomePageMeals} = useContext(myContext);
    const fetchMealsHandler = useCallback(() => {
        fetchHomePageMeals(value)
    },[fetchHomePageMeals,value])
    
    return (
        <div className='home'>
            <div className='home-search'>
                <input type = 'text' value = {value} placeholder='type a meal name...' onChange={e => setValue(e.target.value)}/>
                <button onClick={fetchMealsHandler}>Serach Meal</button>
            </div>
            <div className='home-grid'>
                {
                    meals ?
                    meals.map(el => (
                        <div className='home-meal' key = {el.idMeal}>
                            <img src = {el.strMealThumb} alt = 'meal'/>
                            <h4>{el.strMeal}</h4>
                        </div>
                    )):<h2>No Meals Found Try another word ...</h2>
                }
            </div>
        </div>
    );
};

export default HomePage;