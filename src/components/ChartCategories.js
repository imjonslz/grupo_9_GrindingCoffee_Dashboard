import React from 'react';
import ChartRowCategories from './ChartRowCategories';
import {useState, useEffect} from "react"

let tableRowsDataCategories = [
    {
        Id: 'Billy Elliot ',
        CategoryName: '123',
        ProductsCategory: '5'
    },
    {
        Id: 'Billy Elliot ',
        CategoryName: '123',
        ProductsCategory: '5'
    },
    {
        Id: 'Billy Elliot ',
        CategoryName: '123',
        ProductsCategory: '5'
    },
    {
        Id: 'Billy Elliot ',
        CategoryName: '123',
        ProductsCategory: '5'
    },
]



function ChartUsers (){
    const [Products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [Categories, setCategories] = useState(0);
    const [totalCategoriesOne, setTotalCategoriesOne] = useState(0)
    const [totalCategoriesTwo, setTotalCategoriesTwo] = useState(0)

    useEffect(()=>{
        fetch("http://localhost:3060/api/product")
        .then(response=> response.json())
        .then(data=> {
            setProducts(data.data)
            setTotalProducts(data.total)
            setCategories(data.CategoriesData)
            setTotalCategoriesOne(data.totalGrano)
            setTotalCategoriesTwo(data.totalMolido)
            
        })
        .catch(error=>console.log(error))

      
    }, [])
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered colorPrimary" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Categoria</th>
                                <th>Cantidad de productos</th>
                            </tr>
                        </thead>
                        {Categories.length > 0 && (
                        <tbody>
                        
                            { <ChartRowCategories id = {Categories[0].id} CategoryName={Categories[0].category} ProductsCategory={totalCategoriesOne} />}
                            { <ChartRowCategories id = {Categories[1].id} CategoryName={Categories[1].category} ProductsCategory={totalCategoriesTwo}/>}
                        </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ChartUsers;