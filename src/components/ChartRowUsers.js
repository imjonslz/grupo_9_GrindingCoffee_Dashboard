import React from 'react';


function ChartRowUsers(props){
    return (
                <tr>
                    <td>{props.Id}</td>
                    <td>{props.Name}</td>
                    <td>{props.LastName}</td>
                    <td>{props.Email}</td>
                    <td>{props.Password}</td>
                    <td>{props.UserRoll}</td>
                    <td>{props.Avatar}</td>
                </tr>
            )
    }
    
        

export default ChartRowUsers;