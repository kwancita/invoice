import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import "./detailsInv.css";

function DetailsInv({
  invoice,
  setInvoice,
  client,
  currentUser,
  onDeleteInvoice,
  setInvoices,
}) {
  const { due_date, desc, price, tax_total, total, created_at } = invoice;
  const { invoice_id } = useParams();
  const { id } = useParams();
  const path = `/clients/${id}`;
  // const navigate = useNavigate();
  // const storeClientID = localStorage.getItem("clientID")

  console.log(invoice);

  useEffect(() => {
    fetch(`/invoicers/${invoice_id}`)
      .then((r) => r.json())
      .then((inv) => {
        setInvoice(inv);
      });
  }, [setInvoice, invoice_id]);

  // function handleDelete() {
  //   fetch(`/invoicers/${invoice_id}`, {
  //     method: "DELETE",
  //   });
  //   onDeleteInvoice(invoice_id);
  //   // setInvoices(invoice_id)
  //   navigate(`/clients/${id}`);
  // }

  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="c-div">
      <Link to={path}><KeyboardReturnIcon/></Link>
      <div className="inv-btn-div">
        <button className="inv-btn" onClick={handleExportWithComponent}> Export as PDF</button>
        {/* <button className="inv-btn" onClick={() => window.print()}>Print</button>
        <button className="inv-btn" onClick={handleDelete}>Delete</button> */}
      </div>
      <>
      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <div className="inv-div">
          <div>
            <div className="inv-left">
              <h1>Invoice#  {invoice_id}</h1>
              <p>Created Date: {created_at}</p>
              <p>Due Date: {due_date}</p>
            </div>
            <div className="inv-right">
              <img className="inv-logo" src={currentUser.logo} alt="" />
            </div>
          </div>
          <div className="inv-inv">
              <h3>From</h3>
              <p>{currentUser.company}</p>
              <p>{currentUser.address}</p>
          </div>
          <div>
          <h3>Bill</h3>
            <p>{client.name}</p>
            <p>{client.address}</p>
          </div>
          <div className="inv-table">
          <table>
            <tbody>
              <tr>
                <th className="inv-th">Description</th>
                <th className="inv-th">Price</th>
              </tr>
              <tr>
                <td className="inv-td">{desc}</td>
                <td className="inv-td">{price}</td>
              </tr>
            </tbody>
          </table>
          <div className="inv-total">
            <div>
                <p>Subtotal</p>
                <p>Sales Tax 8.875% </p>
                <p>Total</p>
            </div>
            <div className="total-right">
                <p>${price}</p>
                <p>${tax_total}</p>
                <p>${total}</p>
            </div>
          </div>
          </div>
          
         
        </div>
      </PDFExport>
      </>
    </div>
  );
}

export default DetailsInv;
