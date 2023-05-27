import { Route, Routes, Link } from "react-router-dom";
import Login from "../Pages/Login";
import React, { useEffect, useState } from "react";
import PlantList from "../Pages/PlantList";
import ClassificationList from "../Pages/ClassificationList";
import NavBar from "./NavBar";
import PlantTimeLine from "../Pages/PlantTimeLine";


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
          <Route path="/classifications" element={<ClassificationList user={user} />} />
          <Route path="/" element={<PlantList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
