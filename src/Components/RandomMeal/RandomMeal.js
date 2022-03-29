import React, { useContext, useEffect } from 'react';
import { myContext } from '../Context/Context';
import './RandomMeal.scss'
const RandomMeal = () => {
    const {randomMeal,fetchRandomMeal} = useContext(myContext);
    useEffect(() => {
        fetchRandomMeal()
    },[fetchRandomMeal]);
    return (
        <div className='random'>
            {
                randomMeal?.map(el => (
                    <div key = {el.idMeal} className= 'random-grid'>
                        <div className='random-grid-control'>
                            <img src = {el.strMealThumb} alt = 'random'/>
                            <button onClick={fetchRandomMeal}>Generate Another Meal</button>
                        </div>
                        <div className='random-grid-instructions'>
                            <h4>Instructions</h4>
                            <p>{el.strInstructions}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default RandomMeal;