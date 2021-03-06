import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated){
    return <div>Loading...</div>
  }

  return (
    <div className="app">
     <Router>
        {currentUser? (
          <LoggedIn
            setCurrentUser={setCurrentUser} 
            currentUser={currentUser}
          />
        ):(
          <LoggedOut 
            setCurrentUser={setCurrentUser}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
