import React, { useContext, useEffect } from 'react';
import { myContext } from '../Context/Context';
const Catagories = () => {
    const {catagories,fetchCatagories} = useContext(myContext);
    useEffect(() => {
        console.log(catagories);
        fetchCatagories();
    },[fetchCatagories])
    return (
        <div className='catagories'>
            {catagories?.map(e => (
                <div className = '' key = {e.idCategory}>
                    <img src = {e.strCategoryThumb} alt = 'category'/>
                    <h4>{e.strCategory}</h4>
                </div>
            ))}
        </div>
    );
};

export default Catagories;