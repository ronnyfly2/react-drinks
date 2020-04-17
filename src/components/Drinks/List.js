import React, { useContext } from 'react';
import { DrinksContext } from '../../context/DrinksContext';
import CardDrink from './CardDrink';
const List = ()=>{
	const { drinks, load, getPaginator } = useContext(DrinksContext);
	const createDivPagination = () => {
		let divLi = [];
		for (let i = 0; i < drinks.total_pages; i++) {
      divLi.push(<li key={i} className="page-item"><button className="page-link" onClick={()=>{getPaginator(i+1)}}>{`${i + 1}`}</button></li>);
    }
    return divLi
	}
	return (
		drinks && drinks.data && (drinks.data !=='') && (drinks.data.length > 0) ?
		<div className={`row`}>
			<h4 className={`col-12 m-4`}>Listado</h4>
			{drinks.data.map((ele, idx)=>{
				return (
					<CardDrink key={idx} drink={ele} ></CardDrink>
				)
			})}
			{drinks && drinks.total_pages && drinks.total_pages>1&&(
			<nav aria-label="Page navigation">
				<ul className="pagination">
					{createDivPagination()}
				</ul>
			</nav>)}
		</div>: load? (
			<div className="d-flex justify-content-center m-5">
				<div className="spinner-grow text-danger" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		): drinks.data===""?(
			<div className="d-flex justify-content-center m-5">
				<span className="">No se encontraron tragos</span>
			</div>
		):''
	)
}
export default List;
