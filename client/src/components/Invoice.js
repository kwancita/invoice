import { Link } from 'react-router-dom'
function Invoice({invoice}) {
    const {id, client, due_date, total} = invoice
    const path = `/invoicers/${id}`

    return (
            <tr>
                <td>{id}</td>
                <td>{client.name}</td>
                <td>{due_date}</td>
                <td>{total}</td>
                <td><Link to={path} ><button>Detail</button></Link></td>
            </tr>
    )
}

export default Invoice
