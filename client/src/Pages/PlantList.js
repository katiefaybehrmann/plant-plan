import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function PlantList({ user }) {

    return (


        <Wrapper>

            {user.plants.map((plant) => (
                <Plant key={plant.id}>
                    <Box>
                        <h2>{plant.name}</h2>
                        <img src={plant.img_url} />
                    </Box>
                </Plant>))}
            <Button as={Link} to="/new">
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