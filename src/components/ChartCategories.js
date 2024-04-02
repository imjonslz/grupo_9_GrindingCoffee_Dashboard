import React from 'react';
import ChartRowCategories from './ChartRowCategories';

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
                        <tbody>
                            {
                            tableRowsDataCategories.map( ( row , i) => {
                                return <ChartRowCategories { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ChartUsers;