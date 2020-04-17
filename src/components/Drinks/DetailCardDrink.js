import React, { useContext } from 'react';
import { DrinkDetailContext } from '../../context/DrinkDetailContext';
import { useParams } from "react-router-dom";

const DetailCardDrink = (props)=>{
	const { id }= useParams();
	const { getIdDrink, saveLoadDetail } = useContext(DrinkDetailContext);
	console.log('promi', id)
	//saveLoadDetail(true);
	//getIdDrink(id);
	let number = 0;
	const simulateClick = (e)=>{
		if((e && e.click)&& number===0){
			number = 1
			e.click();
		}
  }
	return (
		<div>
			<div ref={simulateClick} onClick={e=>{
				console.log('ssssss', id);

			} }> apreta</div>
		</div>
	)
}

export default DetailCardDrink;
