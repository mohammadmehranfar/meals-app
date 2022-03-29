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
            setMeals(res.data.meals);
        })
    },[]);
    const fetchCatagories = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res => {
            setCatagories(res.data.categories);
        })
    },[])
    return (
        <myContext.Provider value = {{meals,fetchHomePageMeals,catagories,fetchCatagories}}>
            {children}
        </myContext.Provider>
    )
}
