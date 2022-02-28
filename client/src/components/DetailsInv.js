import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";


function DetailsInv({invoice, setInvoice, currentUser, onDeleteInvoice}) {
    const {client, due_date, desc, price, tax_total, total, status, created_at} = invoice
    const {id} = useParams();
    const path = '/invoicers'
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/invoicers/${id}`)
        .then((r)=>r.json())
        .then((inv)=>{
            setInvoice(inv);
        })
    },[id])

    function handleDelete() {
        fetch(`/invoicers/${id}`, {
          method: "DELETE",
        })
        onDeleteInvoice(id)
        navigate(`/clients/${id}`)
    }

    console.log(invoice)
    
    const pdfExportComponent = useRef(null);
    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    };

    return (
        <>
        <div>
            <button onClick={handleExportWithComponent}> Export as PDF</button>
            <button onClick={() => window.print()}>Print</button>
            <button onClick={handleDelete}>Delete</button>
            <Link to={path}><button>go back</button></Link>
        </div>
        <PDFExport ref={pdfExportComponent} paperSize="A4">
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
        </div>
        </PDFExport>
        
        </>
    )
}

export default DetailsInv
