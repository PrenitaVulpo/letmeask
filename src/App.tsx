import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/rooms/new" component={NewRoom} />
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
