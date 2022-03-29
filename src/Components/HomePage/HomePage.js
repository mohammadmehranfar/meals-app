import React, { useCallback, useContext,useState } from 'react';
import './HomePage.scss';
import { myContext } from '../Context/Context';
const HomePage = () => {
    const [value,setValue] = useState('');
    const {fetchHomePageMeals} = useContext(myContext);
    const fetchMealsHandler = useCallback(() => {
        fetchHomePageMeals(value)
    },[fetchHomePageMeals,value])
    
    return (
        <div className='home'>
            <div className='home-search'>
                <input type = 'text' value = {value} placeholder='type a meal name...' onChange={e => setValue(e.target.value)}/>
                <button onClick={fetchMealsHandler}>Serach Meal</button>
            </div>
            <div className='home-meals'>

            </div>
        </div>
    );
};

export default HomePage;