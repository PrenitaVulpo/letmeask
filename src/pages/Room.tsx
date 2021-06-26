import React from "react";

import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import ButtonLetmeask from "../components/ButtonLetmeask";
import RoomCode from "../components/RoomCode";

import "../styles/room.scss";

type RoomParams = {
	id: string;
};

function Room() {
	const params = useParams<RoomParams>();

	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="Letmeask" />
					<RoomCode code={params.id} />
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
