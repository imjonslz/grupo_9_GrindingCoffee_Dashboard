import React from 'react';
import ChartRowUsers from './ChartRowUsers';

let tableRowsDataUsers = [
    {
        Id: 'Billy Elliot ',
        Name: '123',
        LastName: '5',
        Email: ['Drama','Comedia'],
        Password: 2,
        UserRoll: 1,
        Avatar: 'imagen imaginara'
    },
    {
        Id: 'Billy Elliot ',
        Name: '123',
        LastName: '5',
        Email: ['Drama','Comedia'],
        Password: 2,
        UserRoll: 1,
        Avatar: 'imagen imaginara'
    },
    {
        Id: 'Billy Elliot ',
        Name: '123',
        LastName: '5',
        Email: ['Drama','Comedia'],
        Password: 2,
        UserRoll: 1,
        Avatar: 'imagen imaginara'
    },
    
]



function ChartUsers (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo Electrónico</th>
                                <th>Contraseña</th>
                                <th>Nivel de Permisos</th>
                                <th>Foto de Perfil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsDataUsers.map( ( row , i) => {
                                return <ChartRowUsers { ...row} key={i}/>
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