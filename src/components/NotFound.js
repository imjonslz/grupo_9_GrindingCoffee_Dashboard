import React from "react";
import imagenFondo from "../assets/images/notfound.svg";

function NotFound() {
	return (
		<div className="text-center margin">
			<img
				className="img-fluid px-3 px-sm-4 mt-3 mb-4"
				style={{ width: 30 + "rem" }}
				src={imagenFondo}
				alt=" Ilustracion de cafe triste "
			/>
			<h1 className="notFoundTitle">Error 404 - No encontramos lo que buscabas</h1>
			<p className="notFoundMsg">Revisá que la dirección este bien escrita.</p>
		</div>
	);
}

export default NotFound;
