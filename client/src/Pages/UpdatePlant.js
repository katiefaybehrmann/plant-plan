import React, { useState } from "react";
import { FormField, Input, Label, Button } from "../styles";
import styled from "styled-components";

function UpdatePlant({plant, onUpdatePlant}){
const [imageUrl, setImageUrl] = useState(plant.img_url)


const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/plants/${plant.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "img_url": imageUrl
        })
    })
        .then(r => r.json())
        .then(updatedPlant => onUpdatePlant(updatedPlant))
}

    return(
        <Wrapper>
        <WrapperChild>
            <form onSubmit={handleSubmit}>
                <FormField>
                    <Label htmlFor="imageUrl">Add a new image of your plant growth!</Label>
                    <Input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </FormField>
                <FormField>
                    <Button type="submit">
                        Submit
                    </Button>
                </FormField>
            </form>
        </WrapperChild>
    </Wrapper>
    )
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

export default UpdatePlant;