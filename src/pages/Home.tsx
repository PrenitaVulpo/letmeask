import React from "react";
import IllustrationImg from "../assets/images/illustration.svg";
import LogoImg from "../assets/images/logo.svg";
import GoogleIconImg from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import Button from "../components/Button";

function Home() {
	return (
		<div id="page-auth">
			<aside>
				<img
					src={IllustrationImg}
					alt="Ilustração simbolizando perguntas e respostas"
				/>
				<strong>Crie salas de perguntas &amp; respostas ao vivo</strong>
				<p>Tire dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={LogoImg} alt="Letmeask" />
					<button className="create-room">
						<img src={GoogleIconImg} alt="Logo do Google" />
						Crie sua sala com o Google
					</button>
					<div className="separator">ou entre em uma sala</div>
					<form>
						<input
							type="text"
							name="sala"
							placeholder="Indique o código da sala"
						/>
						<Button type="submit">Entrar na sala</Button>
					</form>
				</div>
			</main>
		</div>
	);
}

export default Home;
