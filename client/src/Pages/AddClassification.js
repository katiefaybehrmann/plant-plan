import React, { useState } from "react";
import { FormField, Input, Label, Button } from "../styles";
import styled from "styled-components";


function AddClassification({ setShowForm, onAddClassification }) {
    const [description, setDescription] = useState("")
    const [conditions, setConditions] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/classifications', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "description": description,
                "conditions": conditions
            })
        })
            .then(r => r.json())
            .then(c => onAddClassification(c))
        clearForm();
        setShowForm(false)
    }

    const clearForm = () => {
        setDescription("")
        setConditions("")
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Add Classification</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="description">Name</Label>
                        <Input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="conditions">Conditions/Description</Label>
                        <Input
                            type="text"
                            id="conditions"
                            value={conditions}
                            onChange={(e) => setConditions(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button type="submit">
                            Submit Classification
                        </Button>
                    </FormField>
                </form>
            </WrapperChild>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default AddClassification;