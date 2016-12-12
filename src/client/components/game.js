import "./game.scss";

import React, {Component} from "react";

class GameContainer extends Component {
	render() {
		return <p>Game!</p>;
	}
}

class GameSidebar extends Component {
	render() {
		return <p>Game sidebar!</p>;
	}
}

export default {
	main: GameContainer,
	sidebar: GameSidebar
};
