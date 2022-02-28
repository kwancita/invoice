import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function SignupForm({setCurrentUser}) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    
    const [formData, setFromData] = useState({
      name:"",
      email:"",
      phone_number:"",
      address:"",
      company:"",
      logo:"",
      username: "",
      password: "",
    });

    function handleChange(e){
      setFromData({
          ...formData,
          [e.target.name]: e.target.value
      });
    };

    function handleSubmit(e){
        e.preventDefault();
  
        const userData = {...formData};
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setCurrentUser(user);
                    navigate("/clients")
                    setFromData({
                        name:"",
                        email:"",
                        phone_number:"",
                        address:"",
                        company:"",
                        logo:"",
                        username: "",
                        password: "",
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
            <h1>logo</h1>
            <Link to="/"><button>X</button></Link>
            <h2>Sign up here</h2>
                <input 
                    className=""
                    type="text"
                    name="name"
                    placeholder="Fullname"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="logo"
                    placeholder="Logo"
                    value={formData.logo}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className=""
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                
                <input 
                    className=""
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />
                {errors.map((err) => (
                    <li className="ls-error" key={err}>{err}</li>
                ))}
                <button className="ls-button" type="submit">Signup</button>
                <p>Already have an account? <Link to="/login" className="ls-link">Login</Link></p>
          </form>
        </div>
    )
}

export default SignupForm
