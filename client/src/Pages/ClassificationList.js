import React, { useState } from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";
import AddClassification from "./AddClassification";

function ClassificationList({onAddClassification, classifications}) {
    const [showForm, setShowForm] = useState(false)

    return (

        <Wrapper>
            <h3>Select a classification and add a plant!</h3>
            {classifications.map((c) => (
                <Classification key={c.id}>
                    <Box>
                        <h2>{c.description}</h2>
                        <p>
                            <em>{c.conditions}</em>
                        </p>
                    </Box>
                </Classification>
            ))}
            {showForm ? (
                <AddClassification setShowForm={setShowForm} onAddClassification={onAddClassification} />
            ) :
                (
                    <div className="actions">
                        <Button onClick={() => setShowForm((showForm) => !showForm)}>
                            Add a Classification!
                        </Button>
                    </div>
                )}
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