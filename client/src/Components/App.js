import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import React, { useEffect, useState, useContext } from "react";
import PlantList from "../Pages/PlantList";
import ClassificationList from "../Pages/ClassificationList";
import NavBar from "./NavBar";
import PlantTimeLine from "../Pages/PlantTimeLine";
import { UserContext } from "./Context";
import Home from "../Pages/Home"

function App() {
  const { user, setUser } = useContext(UserContext)
  const [classifications, setClassifications] = useState([])
  const [loggingIn, setLoggingIn] = useState(false)
  // const [signingUp, setSigningUp] = useState(false)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [loggingIn]);

  useEffect(() => {
    fetch("/classifications")
      .then((r) => r.json())
      .then(setClassifications);
  }, [loggingIn]);

  const handleAddClassification = (newClassification) => {
    setClassifications([...classifications, newClassification])
  }

  const handleUpdatePlant = (updatedPlantObj) => {
    const updatedPlants = user.plants.map(p => p.id === updatedPlantObj.id ? updatedPlantObj : p)
    const updatedUser = { ...user, plants: updatedPlants }
    setUser(updatedUser)
  }

  const handleAddPlant = (newPlant) => {
    const updatedPlants = [...user.plants, newPlant]
    const updatedUser = { ...user, plants: updatedPlants }

    const currentClassification = classifications.find(c => c.id === newPlant.classification_id)
    const updatedCUsers = [...currentClassification.unique_users, newPlant.user]
    const updatedC = {...currentClassification, unique_users: updatedCUsers}
    const updatedClassifications = classifications.map(c => c.id === currentClassification.id ? updatedC : c)

    setUser(updatedUser)
    setClassifications(updatedClassifications)

  }

  const handleDeletePlant = (deletedPlant) => {
    const updatedPlants = user.plants.filter(p => p.id !== deletedPlant.id)
    const updatedUser = { ...user, plants: updatedPlants }
    setUser(updatedUser)
  }

  if (!user) return <Login loggingIn={loggingIn} setLoggingIn={setLoggingIn} />;

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classifications" element={<ClassificationList classifications={classifications} onAddClassification={handleAddClassification} />} />
          <Route path="/plants" element={<PlantList classifications={classifications} onUpdatePlant={handleUpdatePlant} onAddPlant={handleAddPlant} onDeletePlant={handleDeletePlant} />} />
          <Route path="/plants/dates" element={<PlantTimeLine />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
