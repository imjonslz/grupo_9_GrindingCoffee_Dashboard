import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from "react"


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
    const [Products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);

    const [totalUsers, setTotalUsers] = useState(0)
    const [totalCategoriesOne, setTotalCategoriesOne] = useState(0)
    const [totalCategoriesTwo, setTotalCategoriesTwo] = useState(0)

    useEffect(()=>{
        fetch("http://localhost:3060/api/product")
        .then(response=> response.json())
        .then(data=> {
            setProducts(data.data)
            setTotalProducts(data.total)
            setTotalCategoriesOne(data.totalGrano)
            setTotalCategoriesTwo(data.totalMolido)
            
        })
        .catch(error=>console.log(error))

        fetch("http://localhost:3060/api/user")
        .then(response=> response.json())
        .then(data=> {
           
            setTotalUsers(data.total)
            console.log(data);
            
        })
        .catch(error=>console.log(error))
      
    }, [])
    return (
    
        <div className="row">
            
            
         <SmallCard titulo="Cantidad de Usuarios" quantity= {totalUsers}  icon = 'fa-users' color = 'primary' />
         <SmallCard titulo="Cantidad Cafe en Grano" quantity= {totalCategoriesOne}  icon = 'fa-layer-group' color = 'primary' />
{         <SmallCard titulo="Cantidad Cafe Molido" quantity= {totalCategoriesTwo}  icon = 'fa-layer-group' color = 'primary' />}
         <SmallCard titulo="Cantidad de Productos" quantity = {totalProducts} icon = 'fa-mug-saucer'  color = 'primary' />
    
        </div>
    )
}

export default RowTotalData;