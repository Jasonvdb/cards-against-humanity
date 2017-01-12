import "./game.scss";

import React from "react";
import {ContainerBase} from "../lib/component";

class GameContainer extends ContainerBase {
	render() {
		return <p>Game!</p>;
	}
}

class GameSidebar extends ContainerBase {
	render() {
		return <p>Game sidebar!</p>;
	}
}

export default {
	main: GameContainer,
	sidebar: GameSidebar
};
