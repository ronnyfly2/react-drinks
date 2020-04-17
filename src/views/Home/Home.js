import React from "react";
import Form from '../../components/Forms/Form';
import List from '../../components/Drinks/List';

const Home = ()=>{
	return (
		<div className={`container mt-5`}>
			<div className={`row`}>
				<Form />
			</div>
			<List />
		</div>
	)
}
export default Home;
