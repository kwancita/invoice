import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";


function DetailsInv({ invoice, setInvoice, client, currentUser, onDeleteInvoice }) {
    const {due_date, desc, price, tax_total, total, status, created_at} = invoice
    const {invoice_id} = useParams();
    const {id} = useParams();
    const path = `/clients/${id}`
    const navigate = useNavigate();

    console.log(invoice)

    useEffect(()=>{
        fetch(`/invoicers/${invoice_id}`)
        .then((r)=>r.json())
        .then((inv)=>{
            setInvoice(inv);
        })
    },[invoice_id])

    function handleDelete() {
        fetch(`/invoicers/${invoice_id}`, {
          method: "DELETE",
        })
        onDeleteInvoice(invoice_id)
        navigate(`/clients/${id}`)
    }
    
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
            <p>Client name: {client.name}</p>
            <p>Address name: {client.address}</p>
            <p>{created_at}</p>
            <p>{due_date}</p>
            <p>{desc}</p>
            <p>{price}</p>
            <p>{tax_total}</p>
            <p>{total}</p>
            <p>{status ? "Paid" : "Unpaid"}</p>
        </div>
        </PDFExport>
        
        </>
    )
}

export default DetailsInv
