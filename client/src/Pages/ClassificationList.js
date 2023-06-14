import React, { useState } from "react";
import { Box, Button } from "../styles";
import styled from "styled-components";
import AddClassification from "./AddClassification";

function ClassificationList({onAddClassification, classifications}) {
    const [showForm, setShowForm] = useState(false)

    return (

        <Wrapper>
            <h3>View information about classifications!</h3>
            {classifications.map((c) => (
                <Classification key={c.id}>
                    <Box>
                        <h2>{c.description}</h2>
                        <p>
                            <em>{c.conditions}</em>
                        </p>
                        <h4>Who else in your network is planting {c.description}s?</h4>
                        <ul>
                        {c.unique_users.map(u => 
                            <li key={u.id}>{u.username}</li>
                        )}
                        </ul>
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