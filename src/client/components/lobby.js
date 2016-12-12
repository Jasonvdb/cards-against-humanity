import "./lobby.scss";

import React, {Component} from "react";

class LobbyContainer extends Component {
	render() {
		return <p>Lobby!</p>;
	}
}


class LobbySidebar extends Component {
	render() {
		return <p>Sidebar!</p>;
	}
}

export default {
	main: LobbyContainer,
	sidebar: LobbySidebar
};
