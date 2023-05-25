import { Route, Routes, Link } from "react-router-dom";
import Login from "../Pages/Login";
import React, { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <p>navbar</p>
      <p>hold for other views</p>
    </div>
  );
}

export default App;
