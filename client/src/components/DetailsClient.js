import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

function DetailsClient({client, setClient}) {
    const {name, email, phone_number, address, invoicers} = client
    const { id } = useParams();
    const path = '/clients'
    const pathNew = `/clients/${id}/invoicers/new`

    useEffect(()=>{
        fetch(`/clients/${id}`)
        .then((r)=>r.json())
        .then((cli)=>{
            setClient(cli);
        })
    },[id])

    return (
        <div>
            <Link to={path}>go back</Link>
            <h1>this is {name} account</h1>
            <p>{email}</p>
            <p>{phone_number}</p>
            <p>{address}</p>
            <Link to={pathNew}><button>New Invoice</button></Link>
        <table>
          <tbody>
            <tr>
                <th>Invoice No</th>
                <th>Due Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            
            {
            invoicers ? 
            (invoicers.map((inv)=>(
                <tr>
                <td>{inv.id}</td>
                <td>{inv.due_date}</td>
                <td>{inv.total}</td>
                <td>{inv.status ? "Paid" : "Unpaid"}</td>
                <td><Link to={`/clients/${id}/invoicers/${inv.id}`} ><button>Detail</button></Link></td>
                </tr>
            ))
            ):(
                null
            )
            }
           
          </tbody>
        </table>

        </div>
    )
}

export default DetailsClient
