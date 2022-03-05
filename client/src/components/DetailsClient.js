import { Link, useParams } from 'react-router-dom'
import { useEffect } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import "./detailClient.css"

function DetailsClient({client, setClient}) {
    const {name, email, phone_number, address, invoicers} = client
    const { id } = useParams();
    const path = '/clients'
    const pathNew = `/clients/${id}/invoicers/new`
    // localStorage.setItem("clientID",id)

    useEffect(()=>{
        fetch(`/clients/${id}`)
        .then((r)=>r.json())
        .then((cli)=>{
            setClient(cli);
        })
    },[setClient, id])

    return (
        <div className="d-div">
            <div className="d-info">
                <Link to={path}><KeyboardReturnIcon/></Link>
                <h2>{name}</h2>
                <p><strong>Email:</strong>  {email}</p>
                <p><strong>Phone Number:</strong>  {phone_number}</p>
                <p><strong>Address:</strong>  {address}</p>
                <Link to={pathNew}><button className="d-add-btn">New Invoice</button></Link>
            </div>
        <table className="d-table">
          <tbody>
            <tr className="d-tr">
                <th className="d-head-r">Invoice No</th>
                <th className="d-head-date">Due Date</th>
                <th className="d-head-r">Total</th>
                <th className="d-head-r">Status</th>
                <th className="d-head-r">Action</th>
            </tr>
            
            {
            invoicers ? 
            (invoicers.map((inv)=>(
                <tr className="c-tr">
                <td className="d-td">{inv.id}</td>
                <td className="d-td">{inv.due_date}</td>
                <td className="d-td">${inv.total}</td>
                <td className="d-td">{inv.status ? "Paid" : "Unpaid"}</td>
                <td className="c-add"><Link to={`/clients/${id}/invoicers/${inv.id}`} ><button className="c-add-btn">Detail</button></Link></td>
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
