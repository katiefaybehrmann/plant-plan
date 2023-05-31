import { Route, Routes, Link } from "react-router-dom";
import Login from "../Pages/Login";
import React, { useEffect, useState } from "react";
import PlantList from "../Pages/PlantList";
import ClassificationList from "../Pages/ClassificationList";
import NavBar from "./NavBar";
import PlantTimeLine from "../Pages/PlantTimeLine";


function App() {
  const [user, setUser] = useState(null);
  const [classifications, setClassifications] = useState([])
  //update user state for all state?

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
          <Route path="/classifications" element={<ClassificationList user={user} classifications={classifications}/>} />
          <Route path="/plants" element={<PlantList user={user} classifications={classifications}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
