import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const IngredientContext = createContext();

const IngredientProvider = (props)=>{
	const [ ingredient, saveIngredient ] = useState({});
	const [ imgIngredient, ingredientEvent ] = useState({...props});
	//const [ loadDetail, saveLoadDetail ] = useState(false);
	//const { id } = idDrink;
	console.log('manou', typeof imgIngredient);
	useEffect(() => {
			//getLoad();
		if(typeof imgIngredient == 'string'){
			const getIngredient = async()=>{
				saveIngredient(null)
				const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${imgIngredient}`;
				const res = await axios.get(url);
				console.log('data', res)
				if(res.data && res.data.ingredients){
					const urlTwo = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${res.data.ingredients[0].idIngredient}`;
					const resTwo = await axios.get(urlTwo);
					saveIngredient(resTwo.data.ingredients[0]);
				}else{
					saveIngredient({});
				}
			}
			getIngredient()
		}
	}, [imgIngredient])
	return(
		<IngredientContext.Provider value={{ingredient, ingredientEvent}}>
			{props.children}
		</IngredientContext.Provider>
	)
}

export default IngredientProvider;
