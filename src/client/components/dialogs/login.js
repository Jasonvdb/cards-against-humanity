import "./login.scss";

import React from "react";
import * as A from "../../actions";
import {ContainerBase} from "../../lib/container";

class LoginDialog extends ContainerBase {
	render() {
		return (
			<section className="c-login-dialog">
				<h1>Login</h1>
				<p>
					Heyo heoooeyo!
				</p>
			</section>
		);
	}
}

export default {
	id: A.DIALOG_LOGIN,
	component: LoginDialog
};
