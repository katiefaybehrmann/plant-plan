import React from "react";
import { Box, Button } from "../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";



function ClassificationList({ user }){
    return (
        <Wrapper>

            {user.classifications.map((c) => (
                <Classification key={c.id}>
                    <Box>
                        <h2>{c.description}</h2>
                        <p>
                            <em>{c.conditions}</em>
                        </p>
                        <Button>
                            View plants!
                        </Button>
                    </Box>
                </Classification>
            ))}
            <Button as={Link} to="/new">
                Add a Classification!
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
      max-width: 800px;
      margin: 40px auto;
    `;

const Classification = styled.article`
      margin-bottom: 24px;
    `;


export default ClassificationList;