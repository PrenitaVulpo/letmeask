import React, { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

function ButtonLetmeask(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return <button className="button" {...props} />;
}

export default ButtonLetmeask;
