import { useContext } from "react";
import React from "react";
import styled from "styled-components";
import { UserContext } from "../Components/Context";
 

function PlantTimeLine(){
    const {user} = useContext(UserContext);
    return (
        <Wrapper>
            {user.plants.map((plant) => 
            <p>{plant.name}: Seed Indoor: {plant.seed_indoor} Transplant seedling: {plant.seedling_transplant} Seed Outdoor: {plant.seed_outdoor}</p>)}
        </Wrapper>
    )
}

const Wrapper = styled.section`
      max-width: 800px;
      margin: 40px auto;
    `;

const Timeline = styled.article`
      margin-bottom: 24px;
    `;

export default PlantTimeLine;