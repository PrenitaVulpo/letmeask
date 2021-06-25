/* eslint-disable react/button-has-type */
import React from "react";
import IllustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";
import GoogleIconImg from "../assets/images/google-icon.svg";

function Home() {
	return (
		<div>
			<aside>
				<img
					src={IllustrationImg}
					alt="Ilustração simbolizando perguntas e respostas"
				/>
				<strong>Crie salas de perguntas &amp; respostas ao vivo</strong>
				<p>Tire dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
				<img src={LogoImg} alt="Letmeask" />
				<img src={GoogleIconImg} alt="Logo do Google" />
				<button>Crie sua sala com o Google</button>
				<div>ou entre em uma sala</div>
				<form>
					<input
						type="text"
						name="sala"
						placeholder="Indique o código da sala"
					/>
					<button type="submit">Entrar na sala</button>
				</form>
			</main>
		</div>
	);
}

export default Home;
