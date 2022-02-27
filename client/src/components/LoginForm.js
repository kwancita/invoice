import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function LoginForm({setCurrentUser}) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const [formData, setFromData] = useState({
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
        fetch("/login", {
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
                    navigate("/home")
                    setFromData({
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
            <form className="ls-form" onSubmit={handleSubmit}>
              <h2>Login here</h2>
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
                  <span className="ls-error">{errors}</span>
                  <br />
                  <button className="ls-button" type="submit">Login</button>
                  <p>No account yet? <Link to="/signup" className="ls-link">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default LoginForm
