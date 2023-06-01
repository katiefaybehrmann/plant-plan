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

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/classifications")
      .then((r) => r.json())
      .then(setClassifications);
  }, []);

  const handleAddClassification = (newClassification) => {
    setClassifications([...classifications, newClassification])
  }

  if (!user) return <Login onLogin={setUser} />;

  const handleUpdatePlant = (updatedPlantObj) => {
    const updatedPlants = user.plants.map(p => p.id === updatedPlantObj.id ? updatedPlantObj : p)
    const updatedUser = { ...user, plants: updatedPlants }
    setUser(updatedUser)
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/classifications" element={<ClassificationList user={user} classifications={classifications} onAddClassification={handleAddClassification}/>} />
          <Route path="/plants" element={<PlantList user={user} onUpdatePlant={handleUpdatePlant} classifications={classifications}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
