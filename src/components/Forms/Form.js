import React, { useContext, useState } from 'react'
import { DrinksContext } from '../../context/DrinksContext'

const Form = ()=> {
	const [ search, saveSearch ] = useState({nameDrink:''})
	const { searchDrink, saveLoad }  = useContext(DrinksContext)
	const getNameDrink = e=>{
		saveSearch({
			...search,
			[e.target.name]:e.target.value
		})
	}
	return (
		<form className={`col-12`}
			onSubmit={ e=>{
					e.preventDefault();
					searchDrink(search);
					saveLoad(true);
				}}>
			<fieldset className={`text-center`}>
				<legend>Busca tu trago</legend>
			</fieldset>
			<div className={`row`}>
				<div className={`col-md-10`}>
					<input className={`form-control`} type="text" placeholder="Escribe nombre" name="nameDrink" onChange={getNameDrink} />
				</div>
				<div className={`col-md-2`}>
					<button className={`btn btn-danger btn-block`}>Buscar</button>
				</div>
			</div>
		</form>
	)
}
export default Form;
