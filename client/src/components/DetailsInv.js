import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from "react";

function DetailsInv({invoice, setInvoice, currentUser, onDeleteInvoice}) {
    const {client, due_date, desc, price, tax_total, total, status, created_at} = invoice
    const {id} = useParams();
    const path = '/invoicers'
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/invoicers/${id}`)
        .then((r)=>r.json())
        .then((invoice)=>{
            setInvoice(invoice);
        })
    },[id])

    function handleDelete() {
        fetch(`/invoicers/${id}`, {
          method: "DELETE",
        })
        onDeleteInvoice(id)
        navigate("/invoicers")
    }

    console.log(invoice)
    
    return (
        <div>
            {/* should be actual look of invoice */}
            <p>Company: {currentUser.company}</p>
            {/* <p>Client name: {client.name}</p>
            <p>Address name: {client.address}</p> */}
            <p>{created_at}</p>
            <p>{due_date}</p>
            <p>{desc}</p>
            <p>{price}</p>
            <p>{tax_total}</p>
            <p>{total}</p>
            <p>{status}</p>
            <button onClick={handleDelete}>Delete</button>
            <Link to={path}><button>go back</button></Link>
        </div>
    )
}

export default DetailsInv
