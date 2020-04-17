import React, { createContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

export const DrinkDetailContext = createContext();

const DrinkdetailProvider = (props)=>{
	const [ drinkDetail, saveDrinkDetail ] = useState({});
	const { id } = useParams()
	//const [ idDrink, getIdDrink ] = useState({...props});
	//const [ loadDetail, saveLoadDetail ] = useState(false);
	//const { id } = idDrink;
	console.log('dddpov', drinkDetail);
	useEffect(() => {
			//getLoad();
			const getDrinks = async()=>{
				const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
				const res = await axios.get(url);
				if(res.data && res.data.drinks){
					saveDrinkDetail(res.data.drinks[0]);
				}else{
					saveDrinkDetail({});
				}
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
