import { Link, useParams } from 'react-router-dom'
import { useEffect } from "react";

function DetailsClient({client, setClient}) {
    const {name, email, invoicers} = client
    const {id} = useParams();
    const path = '/clients'
    const pathInv = `/clients/${id}/invoicers/${id}`

    console.log(client.invoicers)

    useEffect(()=>{
        fetch(`/clients/${id}`)
        .then((r)=>r.json())
        .then((cli)=>{
            setClient(cli);
        })
    },[setClient, id])

    return (
        <div>
            <Link to={path}>go back</Link>
            <h1>this is {name} account</h1>
            <p>{email}</p>
        <table>
          <tbody>
            <tr>
                <th>Invoice No</th>
                <th>Due Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            
            {invoicers.map((inv)=>(
                <tr>
                <td>{inv.id}</td>
                <td>{inv.due_date}</td>
                <td>{inv.total}</td>
                <td>{inv.status ? "Paid" : "Unpaid"}</td>
                <td><Link to={pathInv} ><button>Detail</button></Link></td>
                </tr>
            ))}
           
          </tbody>
        </table>

        </div>
    )
}

export default DetailsClient
