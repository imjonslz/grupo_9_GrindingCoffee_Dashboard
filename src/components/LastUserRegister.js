import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";

function LastUserRegister() {
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold colorPrimary">
						Ultimo usuario registrado
					</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							style={{ width: 40 + "rem" }}
							src={imagenFondo}
							alt=" Star Wars - Mandalorian "
						/>
					</div>
					<h3 className="colorPrimary">
						Nombre y apellido
					</h3>
					<p className="colorSecondary"><strong>Correo Electrónico: </strong>pepito@gmail.com</p>
				</div>
			</div>
		</div>
	);
}

export default LastUserRegister;
