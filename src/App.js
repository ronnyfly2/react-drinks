import React from 'react';
import DrinksProvider from './context/DrinksContext';
import Routes from "./Routes";
import Header from './components/Header/Header';

function App() {
  return (
		<DrinksProvider>
			<Header />
			<Routes />
		</DrinksProvider>
  );
}

export default App;
