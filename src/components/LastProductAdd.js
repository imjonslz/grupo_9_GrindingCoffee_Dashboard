import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import {useState, useEffect} from "react"

function LastProductAdd() {
	const [Products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3060/api/product")
        .then(response=> response.json())
        .then(data=> {
            setProducts(data.data)
            
        })
        .catch(error=>console.log(error))
      
    }, [])
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold colorPrimary">
						Ultimo producto agregado
					</h5>
				</div>
				<div className="card-body">
				{Products.length > 0 && ( // Verifica si hay elementos en Products
                        <>
                            <div className="text-center">
                                <img
                                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                    style={{ width: "40rem" }}
                                    src={`http://localhost:3060/img/products/${Products[Products.length-1].productImage}`}/* {Products[Products.length-1].productImage} */
                                    alt={Products[Products.length-1].productName}
                                />
                            </div>
                            <h3 className="colorPrimary">{Products[Products.length-1].productName}</h3>
                            <h5 className="colorSecondary">Descripción</h5>
                            <p className="colorSecondary">{Products[Products.length-1].description}</p>
                            <p className="colorSecondary"><strong>Precio: $ </strong>{Products[Products.length-1].price}</p>
                        </>
                    )}
				</div>
			</div>
		</div>
	);
}

export default LastProductAdd;
