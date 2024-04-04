import React from 'react';


function ChartRowCategories(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.CategoryName}</td>
                    <td>{props.ProductsCategory}</td>
                </tr>
            )
    }
    
        

export default ChartRowCategories;