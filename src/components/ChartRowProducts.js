import React from 'react';


function ChartRowProducts(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.productName}</td>
                    <td>{props.category_id===1? "Cafe en grano" : "Cafe molido"}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td><img style={{ width: '100px', height: '100px' }}
							src={`http://localhost:3060/img/products/${props.productImage}`}
							alt={props.name}
						/></td>
                </tr>
            )
    }
    
        

export default ChartRowProducts;