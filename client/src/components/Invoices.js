import Invoice from "./Invoice"

function Invoices({invoices,}) {

    return (
        <div>
            <h1>Invoice</h1>
            <div>
            <table>
            <tbody>
            <tr>
                <th>Invoice No</th>
                <th>Client Name</th>
                <th>Due Date</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
                {invoices.map((invoice)=>(
                    <Invoice 
                        key = {invoice.id}
                        invoice = {invoice}
                    />
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Invoices
