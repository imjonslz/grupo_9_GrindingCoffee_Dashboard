import React from 'react';
import ChartRowProducts from './ChartRowProducts';

let tableRowsDataProducts = [
    {
        Id: 'Billy Elliot ',
        ProductName: '123',
        Category: '5',
        Description: ['Drama','Comedia'],
        Price: 2,
        ProductImg: 1,
    },
    {
        Id: 'Billy Elliot ',
        ProductName: '123',
        Category: '5',
        Description: ['Drama','Comedia'],
        Price: 2,
        ProductImg: 1,
    },
    {
        Id: 'Billy Elliot ',
        ProductName: '123',
        Category: '5',
        Description: ['Drama','Comedia'],
        Price: 2,
        ProductImg: 1,
    },
    {
        Id: 'Billy Elliot ',
        ProductName: '123',
        Category: '5',
        Description: ['Drama','Comedia'],
        Price: 2,
        ProductImg: 1,
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
                                <th>Producto</th>
                                <th>Categoría</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Imagen de producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsDataProducts.map( ( row , i) => {
                                return <ChartRowProducts { ...row} key={i}/>
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