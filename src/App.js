import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Provider store={store}>
					<Router>
						<Route exact path="/" component={Home} />
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
