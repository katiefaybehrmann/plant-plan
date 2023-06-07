import React from "react";
import styled from "styled-components";


function Home() {
    return (
        <div>
            <Wrapper>
                <h1>Welcome to Denver PlantPlan!</h1>
            </Wrapper>
            <Wrapper>
                <p>Click on the buttons to view your garden of plants, your planting timeline, and all plant classifications</p>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Home