import React from 'react';
import ChartRowUsers from './ChartRowUsers';
import {useState, useEffect} from "react"

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
    const [Users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3060/api/user")
        .then(response=> response.json())
        .then(data=> {
            setUsers(data.data)
            
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
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo Electrónico</th>
                        {/*         <th>Nivel de Permisos</th> */}
                                <th>Foto de Perfil</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            Users.map( ( row , i) => {
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