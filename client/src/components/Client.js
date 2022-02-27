import { useState } from "react";
import { Link } from "react-router-dom";

function Client({client,onClick, onDelete}) {
    const  {id,name, email, phone_number, address} = client
    const path = `/clients/${client.id}/invoicers/new`
    function handleDelete() {
        fetch(`/clients/${id}`, {
          method: "DELETE",
        })
        onDelete(id)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>{address}</td>
            <td>
                <button onClick={(e)=> onClick(e, client)}>Edit</button> 
                | 
                <button onClick={handleDelete}>Delete</button>
                |
                <Link to={path}><button>New Invoice</button></Link>
            </td>
        </tr>
    )
}

export default Client

