import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Client({client,onClick, onDelete}) {
    const  {id,name, email, phone_number, address} = client
    // const path = `/clients/${id}/invoicers/new`
    const pathDe = `/clients/${id}`

    function handleDelete() {
        fetch(`/clients/${id}`, {
          method: "DELETE",
        })
        onDelete(id)
    }

    return (
        <>
        <tr className="c-tr">
            <td className="c-td">{name}</td>
            <td className="c-td">{email}</td>
            <td className="c-td">{phone_number}</td>
            <td className="c-td">{address}</td>
            <td className="c-add">
                <EditIcon onClick={(e)=> onClick(e, client)}/>|
                <DeleteForeverIcon onClick={handleDelete}/>|
                <Link to={pathDe}><ArrowForwardIcon /></Link>
            </td>
        </tr>
        </>
    )
}

export default Client

