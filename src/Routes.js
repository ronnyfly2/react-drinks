import React, {Fragment} from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import Home from "./views/Home/Home";
import DetailDrink from "./views/Details/DetailDrink";

const Routes = ()=>{
	function NoMatch() {
		let location = useLocation();

		return (
			<Fragment>
				<h2>Error 404</h2>
				<h4>
					<span>No se encontró la página </span>
					<code>{location.pathname}</code>
				</h4>
				<br/>
				<Link to="/">Ir al inicio</Link>
			</Fragment>
		);
	}
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/detalle/:id" children={<DetailDrink />} />
			<Route path="*">
				<NoMatch />
			</Route>
		</Switch>
	);
}

export default Routes;
