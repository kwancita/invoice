import { useState } from "react";

function FormInv({onAdd}) {
    const [errors, setErrors] = useState([]);
    const [formInv, setFromInv] = useState({
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
                desc: "",
                due_date: "",
                price: ""
              });
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
                <button type="submit">Add new invoice</button>
            </form>
        </div>
    )
}

export default FormInv
