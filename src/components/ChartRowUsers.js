import React from 'react';


function ChartRowUsers(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.lastName}</td>
                    <td>{props.email}</td>
                  {/*   <td>{props.roll.userRoll}</td> */}
                    <td><img style={{ width: '100px', height: '100px' }}
							src={`http://localhost:3060/img/avatars/${props.avatar}`}
							alt={props.name}
						/></td>
                </tr>
            )
    }
    
        

export default ChartRowUsers;