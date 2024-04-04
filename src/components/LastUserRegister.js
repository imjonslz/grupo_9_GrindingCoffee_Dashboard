import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import {useState, useEffect} from "react"

function LastUserRegister() {
	const [Users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3060/api/user")
        .then(response=> response.json())
        .then(data=> {
            setUsers(data.data)
            
        })
        .catch(error=>console.log(error))
      
    }, [])
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold colorPrimary">
						Ultimo usuario registrado
					</h5>
				</div>
				
				<div className="card-body">
					{Users.length > 0 &&
					<>
					<div className="text-center">
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							style={{ width: 40 + "rem" }}
							src={`http://localhost:3060/img/avatars/${Users[Users.length-1].avatar}`}
							alt=" Star Wars - Mandalorian "
						/>
					</div>
					<h3 className="colorPrimary">
						{Users[Users.length-1].name} {Users[Users.length-1].lastName}
						{console.log(Users[Users.length-1].avatar)}
					
					</h3>
					<p className="colorSecondary"><strong>Correo Electrónico: </strong>{Users[Users.length-1].email}</p>
							</>

}
				</div>
			</div>
		</div>
	);
}

export default LastUserRegister;
