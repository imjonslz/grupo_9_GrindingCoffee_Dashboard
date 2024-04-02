import React from 'react';


function ChartRowProducts(props){
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>{props.ProductName}</td>
                    <td>{props.Category}</td>
                    <td>{props.Description}</td>
                    <td>{props.Price}</td>
                    <td>{props.ProductImg}</td>
                </tr>
            )
    }
    
        

export default ChartRowProducts;