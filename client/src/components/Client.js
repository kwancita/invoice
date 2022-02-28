import { Link } from "react-router-dom";

function Client({client,onClick, onDelete}) {
    const  {id,name, email, phone_number, address} = client
    const path = `/clients/${id}/invoicers/new`
    const pathDe = `/clients/${id}`

    function handleDelete() {
        fetch(`/clients/${id}`, {
          method: "DELETE",
        })
        onDelete(id)
    }

    return (
        <tr>
            {/* <td>{id}</td> */}
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
                |
                <Link to={pathDe}><button>Details</button></Link>
            </td>
        </tr>
    )
}

export default Client

