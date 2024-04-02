import React from 'react';
import SmallCard from './SmallCard';


let totalProducts = {
    title: 'Cantidad de productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-mug-saucer'
}

let totalCategories = {
    title:'Cantidad de categorias', 
    color:'primary', 
    cuantity: '79',
    icon:'fa-layer-group'
}

let totalUsers = {
    title:'Candidad de usuarios' ,
    color:'primary',
    cuantity:'49',
    icon:'fa-users'
}

let cartProps = [totalProducts, totalCategories, totalUsers];

function RowTotalData(){
    return (
    
        <div className="row">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i}/>
            
            })}

        </div>
    )
}

export default RowTotalData;