import React, { FormEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import ButtonLetmeask from "../components/ButtonLetmeask";
import useAuth from "../hooks/useAuth";

import "../styles/auth.scss";
import { database } from "../services/firebase";

function Home() {
	const [roomCode, setRoomCode] = useState("");

	const { user, signInWithGoogle } = useAuth();
	const history = useHistory();

	async function handleCreateRoom() {
		if (!user) {
			await signInWithGoogle();
		}

		history.push("/rooms/new");
	}

	async function handleJoinRoom(event: FormEvent) {
		event.preventDefault();

		if (roomCode.trim() === "") {
			return;
		}

		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			// eslint-disable-next-line no-alert
			alert("Room does not exists.");
			return;
		}

		history.push(`/rooms/${roomCode}`);
	}

	return (
		<div id="page-auth">
			<aside>
				<img
					src={illustrationImg}
					alt="Ilustração simbolizando perguntas e respostas"
				/>
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire as dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={logoImg} alt="Letmeask" />
					<ButtonLetmeask onClick={handleCreateRoom} className="create-room">
						<img src={googleIconImg} alt="Logo do Google" />
						Crie sua sala com o Google
					</ButtonLetmeask>
					<div className="separator">ou entre em uma sala</div>
					<form onSubmit={handleJoinRoom}>
						<input
							type="text"
							placeholder="Digite o código da sala"
							value={roomCode}
							onChange={(event) => setRoomCode(event.target.value)}
						/>
						<ButtonLetmeask type="submit">Entrar na sala</ButtonLetmeask>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Home;
