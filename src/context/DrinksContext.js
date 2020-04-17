import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DrinksContext = createContext();

const DrinksProvider = (props)=>{
	const [ drinks, saveDrinks ] = useState([]);
	const [ drinksDumy, saveDrinksDummy ] = useState([]);
	const [ search, searchDrink ] = useState({...props});
	const [ load, saveLoad ] = useState(false);
	const { nameDrink }= search;
	const getLoad=()=>{
		saveDrinks(false);
	}
	const getPaginator = (ele)=>{
		console.log(ele);
		paginator(drinksDumy, ele)
	}
	const paginator = (items, page, per_page)=>{
		page = page || 1;
		per_page = per_page || 10;
		let offset = (page - 1) * per_page;

		let paginatedItems = items.slice(offset).slice(0, per_page);
		let total_pages = Math.ceil(items.length / per_page);
		saveDrinks({
				page: page,
				per_page: per_page,
				pre_page: page - 1 ? page - 1 : null,
				next_page: (total_pages > page) ? page + 1 : null,
				total: items.length,
				total_pages: total_pages,
				data: paginatedItems
			});
	}
	useEffect(() => {
		if(load){
			getLoad();
			const getDrinks = ()=>{
				const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${nameDrink}`;
				axios.get(url).then((res)=>{
					console.log(res)
					if(res.data){
						if(res.data.drinks.length>0){
							paginator(res.data.drinks);
							saveDrinksDummy(res.data.drinks);
							saveLoad(false);
						}
					}else{
						saveDrinks({data:''});
						saveLoad(false);
					}
				}).catch((error)=>{
					console.log('vvv', error)
					saveDrinks({data:''});
					saveLoad(false);
				});
			}
			getDrinks();
		}
	}, [load, nameDrink])
	return (
		<DrinksContext.Provider value={{drinks, load, searchDrink, saveLoad, getPaginator, saveDrinks}}>
			{props.children}
		</DrinksContext.Provider>
	)
}



export default DrinksProvider;
