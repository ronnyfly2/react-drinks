import React, { useContext, useState } from "react";
import { DrinkDetailContext } from '../../context/DrinkDetailContext';
import { IngredientContext } from '../../context/IngredientContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faTachometerAlt, faGlassWhiskey, faLink, faFingerprint, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './drinks.module.css'

const ContainDetailDrink = ()=>{
	const { drinkDetail } = useContext(DrinkDetailContext);
	const { ingredient, ingredientEvent } = useContext(IngredientContext);
	const [ openBool, openEvent ] = useState(false);
	const [ imgIngredient, imgEvent ] = useState({});
	const openModal = (ingreName)=>{
		openEvent(true);
		imgEvent(ingreName);
		ingredientEvent(ingreName);
	}
	const closenModal = ()=>{
		openEvent(false);
	}
	return (
		drinkDetail && drinkDetail.idDrink?(
			<div className="col-12">
				<div className="card mb-3">
					<div className="row no-gutters">
						<div className="col-md-12">
							<img src={drinkDetail.strDrinkThumb} className="card-img" alt="..." />
						</div>
						<div className="col-md-12">
							<div className="card-body">
								<h5 className="card-title">{drinkDetail.strDrink}</h5>
								<p className="card-text">{drinkDetail.strInstructions}</p>
								<p><FontAwesomeIcon icon={faCocktail}></FontAwesomeIcon> { drinkDetail.strCategory }</p>
								<p><FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon> { drinkDetail.strAlcoholic }</p>
								<p><FontAwesomeIcon icon={faGlassWhiskey}></FontAwesomeIcon> { drinkDetail.strGlass }</p>
								{ drinkDetail.strIngredient1 && <p className={`${styles.link_modal}`} onClick={()=>openModal(drinkDetail.strIngredient1)}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> { drinkDetail.strIngredient1 } / { drinkDetail.strMeasure1 }</p>}
								{ drinkDetail.strIngredient2 && <p className={`${styles.link_modal}`} onClick={()=>openModal(drinkDetail.strIngredient2)}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> { drinkDetail.strIngredient2 } / { drinkDetail.strMeasure2 }</p>}
								{ drinkDetail.strIngredient3 && <p className={`${styles.link_modal}`} onClick={()=>openModal(drinkDetail.strIngredient3)}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> { drinkDetail.strIngredient3 } / { drinkDetail.strMeasure3 }</p>}
								{ drinkDetail.strIngredient4 && <p className={`${styles.link_modal}`} onClick={()=>openModal(drinkDetail.strIngredient4)}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> { drinkDetail.strIngredient4 } / { drinkDetail.strMeasure4 }</p>}
								<p><FontAwesomeIcon icon={faFingerprint}></FontAwesomeIcon> { drinkDetail.idDrink }</p>
								<p className="card-text text-right"><small className="text-muted">{drinkDetail.dateModified}</small></p>
							</div>
						</div>
					</div>
				</div>
				{openBool && <div className={`${styles.override}`}>
					<div className={`${styles.container}`}>
						<div className={`row`}>
							<FontAwesomeIcon icon={faTimes} className={`${styles.svg}`} onClick={closenModal}></FontAwesomeIcon>
							<div className={`col-12`}>
							<div className={`card m-2 ${styles.card}`}>
								<div className="row no-gutters">
									<div className="col-md-4">
										<img src={`https://www.thecocktaildb.com/images/ingredients/${imgIngredient}.png`} className="card-img" alt="..." />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{imgIngredient}</h5>
											<div className={`card-text ${styles.card_text}`}>{ingredient && ingredient.strDescription?ingredient.strDescription:ingredient && ingredient.strDescription === null?'No tiene descripción':(
											<div className="d-flex justify-content-center m-5">
												<div className="spinner-grow text-danger" role="status">
													<span className="sr-only">Loading...</span>
												</div>
											</div>)}</div>
											<p className="card-text text-right"><small className="text-muted">{ingredient && ingredient.idIngredient}</small></p>
										</div>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>}
			</div>):<div className="col-12">
				<span>{drinkDetail ===null ? 'No se encontró el trago':(
					<div className="d-flex justify-content-center m-5">
						<div className="spinner-grow text-danger" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				)}</span>
			</div>
	)
}

export default ContainDetailDrink;
