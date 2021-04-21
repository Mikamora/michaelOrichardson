import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRouter from "./components/PrivateRouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App: React.FC<IAppProps> = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path = "/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}


interface IAppProps { }

export default App;
