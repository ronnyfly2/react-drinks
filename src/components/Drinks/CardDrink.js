import React from 'react';
import { Link } from "react-router-dom";
import styles from './drinks.module.css'
const cardDrink = ({drink})=>{
	return (
		<div className={`col-6 ${styles.my_7}`}>
			<div className={`card`}>
				<img src={`${drink.strDrinkThumb}`} className="card-img-top" alt="trago" />
				<div className="card-body">
					<h5 className="card-title">{drink.strDrink} - {drink.strCategory}</h5>
					{/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}
					<p className="card-text"><small className="text-muted"><b>ID:</b> {drink.idDrink}</small></p>
					<Link to={`/detalle/${drink.idDrink}`} className="btn btn-danger btn-block">Ir al detalle</Link>
				</div>
			</div>
		</div>
	)
}

export default cardDrink;
