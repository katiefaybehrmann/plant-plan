import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import UpdatePlant from "./UpdatePlant";
import AddPlant from "./AddPlant";
import { UserContext } from "../Components/Context";

function PlantList({ classifications, onUpdatePlant, onAddPlant, onDeletePlant }) {
    const {user} = useContext(UserContext); 
    const [isEditing, setIsEditing] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleUpdatePlant = (updatedPlant) => {
        setIsEditing(false)
        onUpdatePlant(updatedPlant)
    }

    const handleDeleteClick = (deletedPlant) => {
        fetch(`/plants/${deletedPlant.id}`, {
            method: "DELETE",
        });

        onDeletePlant(deletedPlant)
    }

    return (
        <Wrapper>

            {user.plants.map((plant) => (
                <Plant key={plant.id} handleDeleteClick={handleDeleteClick}>
                    <Box>
                        <h2>{plant.name}</h2>
                        <p>
                            <em>{plant.description}</em>
                        </p>
                        <p>
                            <em>Classification: {plant.classification.description}</em>
                        </p>
                        <img className="card" src={plant.img_url} alt={plant.name} />
                        {isEditing ? (
                            <UpdatePlant key={plant.id} plant={plant} onUpdatePlant={handleUpdatePlant} />
                        ) :
                            (
                                <div className="actions">
                                    <Button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                                        <span aria-label="edit">
                                            New plant pic!
                                        </span>
                                    </Button>
                                    <Button onClick={() => handleDeleteClick(plant)}>
                                        <span role="img" aria-label="delete">
                                            Time to harvest!
                                        </span>
                                    </Button>
                                </div>
                            )}
                    </Box>
                </Plant>
            ))}
            {showForm ? (
                <AddPlant setShowForm={setShowForm} classifications={classifications} onAddPlant={onAddPlant} />
            ) :
                (
                    <div className="actions">
                        <Button onClick={() => setShowForm((showForm) => !showForm)}>
                            Add a Plant!
                        </Button>
                    </div>
                )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
      max-width: 800px;
      margin: 40px auto;
    `;

const Plant = styled.article`
      margin-bottom: 24px;
    `;


export default PlantList;