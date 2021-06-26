import React, { FormEvent, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import ButtonLetmeask from "../components/ButtonLetmeask";
import RoomCode from "../components/RoomCode";
import useAuth from "../hooks/useAuth";
import { database } from "../services/firebase";

import "../styles/room.scss";
import FirebaseQuestions from "../TS/Types/FirebaseQuestions";
import Question from "../TS/Types/Question";
import RoomParams from "../TS/Types/RoomParams";

function Room() {
	const params = useParams<RoomParams>();
	const { user } = useAuth();
	const [newQuestion, setNewQuestion] = useState("");
	const [questions, setQuestions] = useState<Question[]>([]);
	const [title, setTitle] = useState("");

	const roomId = params.id;

	async function handleSendQuestion(event: FormEvent) {
		event.preventDefault();

		if (newQuestion.trim() === "") {
			return;
		}

		if (!user) {
			throw new Error("You must be logged in");
		}

		const question = {
			content: newQuestion,
			author: {
				name: user.name,
				avatar: user.avatar,
			},
			isHighlighted: false,
			isAnswered: false,
		};

		await database.ref(`rooms/${roomId}/questions`).push(question);

		setNewQuestion("");
	}

	useEffect(() => {
		const roomRef = database.ref(`rooms/${roomId}`);

		roomRef.on("value", (room) => {
			const databaseRoom = room.val();
			const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

			const parsedQuestions = Object.entries(firebaseQuestions).map(
				([key, value]) => {
					const result = {
						id: key,
						content: value.content,
						author: value.author,
						isHighlighted: value.isHighlighted,
						isAnswered: value.isAnswered,
					};
					return result;
				},
			);

			setTitle(databaseRoom.title);
			setQuestions(parsedQuestions);
		});
	}, [roomId]);

	return (
		<div id="page-room">
			<header>
				<div className="content">
					<img src={logoImg} alt="Letmeask" />
					<RoomCode code={roomId} />
				</div>
			</header>

			<main>
				<div className="room-title">
					<h1>Sala {title}</h1>
					{questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
				</div>

				<form onSubmit={handleSendQuestion}>
					<textarea
						placeholder="O que você quer perguntar?"
						onChange={(event) => setNewQuestion(event.target.value)}
						value={newQuestion}
					/>

					<div className="form-footer">
						{user ? (
							<div className="user-info">
								<img src={user.avatar} alt={user.name} />
								<span>{user.name}</span>
							</div>
						) : (
							<span>
								Para enviar uma pergunta, <button>faça seu login</button>.
							</span>
						)}
						<ButtonLetmeask type="submit" disabled={!user}>
							Enviar pergunta
						</ButtonLetmeask>
					</div>
				</form>

				{JSON.stringify(questions)}
			</main>
		</div>
	);
}

export default Room;
