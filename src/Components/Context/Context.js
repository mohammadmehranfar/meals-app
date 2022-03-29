import React, { useCallback, useState } from "react";
import axios from 'axios';
import { createContext } from "react";
export const myContext = createContext();
export const AppContext = ({children}) => {
    const [meals,setMeals] = useState([]);
    const [catagories,setCatagories] = useState([]);
    const [randomMeal,setRandomMeal] = useState([]);
    const fetchHomePageMeals = useCallback(searchTerm => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(res =>{
            console.log(res.data.meals);
            return res.data;
        })
    },[])
    return (
        <myContext.Provider value = {{fetchHomePageMeals}}>
            {children}
        </myContext.Provider>
    )
}
