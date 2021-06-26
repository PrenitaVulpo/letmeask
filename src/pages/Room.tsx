import React from "react";

import logoImg from "../assets/images/logo.svg";
import ButtonLetmeask from "../components/ButtonLetmeask";

import "../styles/room.scss";

function Room() {
	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="Letmeask" />
					<div>código</div>
				</div>
			</header>

			<main className="content">
				<div className="room-title">
					<h1>Sala</h1>
					<span>4 perguntas</span>
				</div>
				<form>
					<textarea placeholder="O que você gostaria de perguntar?" />
					<div className="form-footer">
						<span>
							Para enviar sua pergunta, <button>faça seu login</button>
						</span>
						<ButtonLetmeask type="submit">Enviar pergunta</ButtonLetmeask>
					</div>
				</form>
			</main>
		</div>
	);
}

export default Room;
