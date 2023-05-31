import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function PlantList({ user }) {

    return (
        <Wrapper>

            {/* {user.plants.map((plant) => (
                <ul className="card" key={plant.id}>
                    <Box>
                        <li className="cards">
                            <h2>{plant.name}</h2>
                            <img src={plant.img_url} alt={plant.name} />
                            <p>{plant.description}</p>
                            <button as={Link} to={`/plants/${plant.id}`}>
                                Update your {plant.name} plant!
                            </button>
                        </li>
                    </Box>
                </ul>))} */}

            {user.plants.map((plant) => (
                <Plant key={plant.id}>
                    <Box>
                        <h2>{plant.name}</h2>
                        <p>
                            <em>{plant.description}</em>
                        </p>
                        <p>
                            <em>Classification: {plant.classification.description}</em>
                        </p>
                        <img className="card" src={plant.img_url} alt={plant.name} />
                        <Button>
                            Update this plant!
                        </Button>
                    </Box>
                </Plant>
            ))}
            <Button as={Link} to="/classifications">
                Add a plant!
            </Button>
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