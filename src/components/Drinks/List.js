import React, { useContext } from 'react';
import { DrinksContext } from '../../context/DrinksContext';
import CardDrink from './CardDrink';
const List = ()=>{
	const { drinks, load } = useContext(DrinksContext);

	return (
		drinks && drinks.length > 0 ?
		<div className={`row`}>
			<h4 className={`col-12 m-4`}>Listado</h4>
			{drinks.map((ele, idx)=>{
				return (
					<CardDrink key={idx} drink={ele} ></CardDrink>
				)
			})}
		</div>: load? (
			<div className="d-flex justify-content-center m-5">
				<div className="spinner-grow text-danger" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		): drinks===null?(
			<div className="d-flex justify-content-center m-5">
				<span className="sr-only">No se encontraron tragos</span>
			</div>
		):''
	)
}
export default List;
