import React, { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return <button className="button" {...props} />;
}

export default Button;
