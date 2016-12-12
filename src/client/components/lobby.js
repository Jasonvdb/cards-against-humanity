import "./lobby.scss";

import React, {Component} from "react";
import Chat from "./chat";

class LobbyContainer extends Component {
	constructor(props) {
		super(props);

		this._joinGame = (game) => {
			console.log(`TODO: Joing game ${game}`);
		};
	}

	render() {
		const games = [
			{title: "Game 1", id: 1, players: ["Player-One", "Player-Two", "Player-Three"]},
			{title: "Game 2", id: 2, players: ["Player-Two", "Player-Three"]},
			{title: "Game 3", id: 3, players: ["Player-One", "Player-Two"]},
			{title: "Game 4", id: 4, players: ["Player-Four", "Player-Two", "Player-Three"]},
			{title: "Game 5", id: 5, players: ["Player-One", "Player-Three"]}
		];
		return (
			<div className="c-lobby">
				<GameList games={games} joinGame={this._joinGame}/>
				<Chat />
			</div>
		);
	}
}


class LobbySidebar extends Component {
	constructor(props) {
		super(props);

		this._login = () => {
			console.log("TODO: Implement login");
		};

		this._creatGame = () => {
			console.log("TODO: Create game");
		};
	}

	render() {
		const canLogin = true;
		const canCreateGame = true;
		const canCreateGameInProgress = false;

		return (
			<section className="c-lobby-sidebar">
				<div className="m-sidebar-buttons">
					{!canLogin ? null	:
						<button className="m-button primary" onClick={this._login}>Login</button>}
					{!canCreateGame ? null :
						<button onClick={this._creatGame} disabled={canCreateGameInProgress} className="m-button good">
							Create game
						</button>}
				</div>
			</section>
		);
	}
}

function GameList({games, joinGame}) {
	return (
		<section className="c-game-list">
			{games.length > 0 ? null : <div className="no-games">There are no games :( </div>}

			{games.map(game =>
				<div className="game" key={game.id} onClick={() => joinGame(game)}>
					<div className="title">{game.title}</div>
					<div className="players">
						{game.players.join(", ")}
					</div>
					<div className="join-game">Join game</div>
				</div>
			)}
		</section>
	);
}

export default {
	main: LobbyContainer,
	sidebar: LobbySidebar
};
