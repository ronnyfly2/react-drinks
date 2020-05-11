import React, { useContext, useState } from 'react'
import { DrinksContext } from '../../context/DrinksContext'

const Form = ()=> {
	const [ search, saveSearch ] = useState({nameDrink:''});
	const { searchDrink, saveLoad, saveDrinks }  = useContext(DrinksContext);
	const [ characterEmpty, saveCharacter ] = useState(false);
	const getEmtyCaractrer = ()=>{
		saveCharacter(true)
	}
	const getEmtyCaractrerF = ()=>{
		saveCharacter(false)
	}
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
					getEmtyCaractrerF();
					if((search.nameDrink.length===1)){
						searchDrink(search);
						saveLoad(true);
					}else{
						getEmtyCaractrer();
						saveDrinks([]);
					}
				}}>
			<fieldset className={`text-center`}>
				<legend>Busca tu trago</legend>
			</fieldset>
			<div className={`row`}>
				<div className={`col-md-10`}>
					<label htmlFor="nameDrink" className="label_hide">Buscar</label>
					<input className={`form-control`} type="text" placeholder="Escribe un caracter" id="nameDrink" name="nameDrink" onChange={getNameDrink} />
				</div>
				<div className={`col-md-2`}>
					<button className={`btn btn-danger btn-block`}>Buscar</button>
				</div>
				{characterEmpty&&<div className={`col-md-12`}>
					<div className="d-flex justify-content-center m-5">
						<span>Debe escribir un caracter para buscar tu trago</span>
					</div>
				</div>}
			</div>
		</form>
	)
}
export default Form;
