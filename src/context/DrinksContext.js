import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DrinksContext = createContext();

const DrinksProvider = (props)=>{
	const [ drinks, saveDrinks ] = useState([]);
	const [ search, searchDrink ] = useState({...props});
	const [ load, saveLoad ] = useState(false);
	const { nameDrink }= search;
	const getLoad=()=>{
		saveDrinks(false);
	}
	useEffect(() => {
		if(load){
			getLoad();
			const getDrinks = async()=>{
				const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${nameDrink}`;
				const res = await axios.get(url);
				if(res.data){
					saveDrinks(res.data.drinks);
				}else{
					saveDrinks(null);
				}
				saveLoad(false);
			}
			getDrinks();
		}
	}, [load, nameDrink])
	return (
		<DrinksContext.Provider value={{drinks, load, searchDrink, saveLoad}}>
			{props.children}
		</DrinksContext.Provider>
	)
}



export default DrinksProvider;
