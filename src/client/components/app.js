import "./app.scss";

import React, {Component} from "react";

class AppContainer extends Component {
	componentDidMount() {
		console.log('Mounting app...');
	}

	render() {
		return <h1>Hello world</h1>;
	}
}

export default AppContainer;
