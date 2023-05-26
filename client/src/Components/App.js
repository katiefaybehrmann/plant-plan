import { Route, Routes, Link } from "react-router-dom";
import Login from "../Pages/Login";
import React, { useEffect, useState } from "react";
import PlantList from "../Pages/PlantList";
import ClassificationList from "../Pages/ClassificationList";
import NavBar from "./NavBar";


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
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/classifications">
            <ClassificationList user={user} />
          </Route>
          <Route path="/">
            <PlantList />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
