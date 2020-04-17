import React from "react";
import DrinkdetailProvider from '../../context/DrinkDetailContext';
import IngredientProvider from '../../context/IngredientContext';
import ContainDetailDrink from '../../components/Drinks/ContainDetailDrink';
import { useParams, Link } from "react-router-dom";
const DetailDrink = ()=>{
	let { id } = useParams();
	return (
		<DrinkdetailProvider>
			<IngredientProvider>
				<div className={`container mt-5`}>
					<div className="row">
						<div className={`col-12`}>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">{ id }</li>
								</ol>
							</nav>
						</div>
						<div className={`col-12`}>
							<ContainDetailDrink />
						</div>
					</div>
				</div>
			</IngredientProvider>
		</DrinkdetailProvider>
	)
}
export default DetailDrink;
