import * as React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRouter from "./components/PrivateRouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkDetails from "./pages/Work-details";
import Work from "./pages/Work";

const App: React.FC<IAppProps> = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path = "/">
						<Home />
					</Route>
					<Route exact path = "/about">
						<About />
					</Route>
					<Route exact path = "/work">
						<Work />
					</Route>
					<Route exact path = "/work/:id">
						<WorkDetails />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
}


interface IAppProps { }

export default App;
