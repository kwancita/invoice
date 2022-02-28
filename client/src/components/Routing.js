import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Clients from "./Clients";
import DetailsClient from "./DetailsClient";
import DetailsInv from "./DetailsInv";
import FormInv from "./FormInv";
// import Invoices from "./Invoices";
import UserAccount from "./UserAccount";

function Routing({currentUser}) {
    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const [invoices, setInvoices] = useState([])
    const [invoice, setInvoice] = useState({})

    useEffect(()=>{
        fetch("/clients")
        .then((r)=>r.json())
        .then((setClients))
    },[])

    useEffect(()=>{
        fetch("/invoicers")
        .then((r)=>r.json())
        .then((setInvoices))
    },[])

    function handleAddClient(newClient){
        setClients([...clients, newClient])
    }

    function handleAddInvoice(newInvoice){
        setInvoices([...invoice, newInvoice])
    }

    function handleDeleteInvoice(id) {
        const updateInvoices = invoices.filter((invoice) => invoice.id !== id);
        setInvoices(updateInvoices);
      }

    return (
        <div>
            <Routes>
                <Route path="/clients" element={<Clients currentUser={currentUser} clients={clients} setClients={setClients} onAdd={handleAddClient} />} />
                <Route path="/clients/:id" element={<DetailsClient client={client} setClient={setClient} />} />
                {/* <Route path="/invoicers" element={<Invoices invoices={invoices} />} /> */}
                <Route path="/clients/:id/invoicers/:id" element={<DetailsInv invoice={invoice} setInvoice={setInvoice} onDeleteInvoice={handleDeleteInvoice} currentUser={currentUser} />} />
                <Route path="/me" element={<UserAccount currentUser={currentUser} />} />
                <Route path="/clients/:id/invoicers/new" element={<FormInv onAdd={handleAddInvoice} /> } />
            </Routes>
        </div>
    )
}

export default Routing
