import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Clients from "./Clients";
import DetailsClient from "./DetailsClient";
import DetailsInv from "./DetailsInv";
import EditUser from "./EditUser";
import FormInv from "./FormInv";
// import Invoices from "./Invoices";
import UserAccount from "./UserAccount";

function Routing({currentUser, setCurrentUser}) {
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
        setInvoices([...invoices, newInvoice])
    }

    function handleDeleteInvoice(id) {
        const updateInvoices = invoices.filter((invoice) => invoice.id !== id);
        setInvoices(updateInvoices);
      }

    function handleUpdate(updatedinv) {
        const updatedInvs = invoices.map((inv) => {
          if (inv.id === updatedinv.id) {
            return updatedinv;
          } else {
            return inv;
          }
        });
        setInvoices(updatedInvs);
    }

    return (
        <div>
            <Routes>
                <Route path="/clients" element={<Clients currentUser={currentUser} clients={clients} setClients={setClients} client={client} onAdd={handleAddClient} />} />
                <Route path="/clients/:id" element={<DetailsClient client={client} setClient={setClient} onUpdate={handleUpdate} invoice={invoice} />} />
                <Route path="/clients/:id/invoicers/:invoice_id" element={<DetailsInv invoice={invoice} setInvoice={setInvoice} onDeleteInvoice={handleDeleteInvoice} client={client} currentUser={currentUser} onUpdate={handleUpdate}/>} />
                <Route path="/me" element={<UserAccount currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
                <Route path="/account" element={<EditUser currentUser={currentUser} />} />
                <Route path="/clients/:id/invoicers/new" element={<FormInv onAdd={handleAddInvoice} /> } />
            </Routes>
        </div>
    )
}

export default Routing
