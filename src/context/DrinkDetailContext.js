import React, { createContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

export const DrinkDetailContext = createContext();

const DrinkdetailProvider = (props)=>{
	const [ drinkDetail, saveDrinkDetail ] = useState({});
	const { id } = useParams()
	useEffect(() => {
			const getDrinks = ()=>{
				const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
				axios.get(url).then((res)=>{
					if(res.data && res.data.drinks){
						saveDrinkDetail(res.data.drinks[0]);
					}else{
						saveDrinkDetail(null);
					}
				}).catch((error)=>{
					console.log('error data',error);
					saveDrinkDetail(null);
				})
			}
			getDrinks()
	}, [id])
	return(
		<DrinkDetailContext.Provider value={{drinkDetail}}>
			{props.children}
		</DrinkDetailContext.Provider>
	)
}

export default DrinkdetailProvider;
