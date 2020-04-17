import React from 'react';
import styles from './header.module.css';
const Header = ()=> {
	return (
		<header className={`bg-danger ${styles.header}`}>
			<div className="row">
				<div className="col-12 text-center">
					<h1>Busca los ingredientes de tu trago favorito</h1>
				</div>
			</div>
		</header>
	)
}
export default Header;
