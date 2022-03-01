import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

function FormInv({onAdd}) {
    const navigate = useNavigate()
    const { id } = useParams()
    const params = useParams()
    const clientID = params.id
    const [errors, setErrors] = useState([]);
    const [formInv, setFromInv] = useState({
        client_id: clientID,
        desc: "",
        due_date: "",
        price: ""
    });

    function handleChange(e) {
        setFromInv({
          ...formInv,
          [e.target.name]: e.target.value,
        });
      }

      function handleSubmit(e) {
        e.preventDefault();
    
        const invoiceData = { ...formInv };
        fetch("/invoicers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(invoiceData),
        }).then((r) => {
          if (r.ok) {
            r.json().then((invoice) => {
              onAdd(invoice);
              setFromInv({
                client_id: "",
                desc: "",
                due_date: "",
                price: ""
              });
              navigate(`/clients/${id}`)
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="desc"
                  placeholder="Describtion"
                  value={formInv.desc}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  name="due_date"
                  placeholder="Due Date"
                  value={formInv.due_date}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formInv.price}
                  onChange={handleChange}
                />
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
                <button type="submit">Add new invoice</button>
            </form>
        </div>
    )
}

export default FormInv
