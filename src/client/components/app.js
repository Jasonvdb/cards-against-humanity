import "./app.scss";

import React, {Component} from "react";

class AppContainer extends Component {
	componentDidMount() {
		console.log('Mounting app...');
	}

	render() {
		const {main, sidebar} = this.props;

		return (
			<div className={`c-application`}>
				<div className="inner">
						<div className="sidebar">
							{sidebar}
						</div>
						<div className="main">
							{main}
						</div>
				</div>
			</div>
		);
	}
}

export default AppContainer;
