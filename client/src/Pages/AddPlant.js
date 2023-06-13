import React, { useState } from "react";
import { FormField, Input, Label, Button, Error } from "../styles";
import styled from "styled-components";

function AddPlant({ classifications, setShowForm, onAddPlant }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [seedIndoorDate, setSeedIndoorDate] = useState("")
    const [transplantDate, setTransplantDate] = useState("")
    const [seedOutdoorDate, setSeedOutdoorDate] = useState("")
    const [classification, setClassification] = useState('')
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/plants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "img_url": image,
                "description": description,
                "seed_indoor": seedIndoorDate,
                "seedling_transplant": transplantDate,
                "seed_outdoor": seedOutdoorDate,
                "classification_id": classification
            })
        })
            .then((r) => {
                if (r.ok) {
                    r.json()
                        .then((p) => {
                            console.log(p)
                            onAddPlant(p)
                            clearForm();
                            setShowForm(false)
                        })

                }
                else {
                    r.json().then((err) => setErrors(err.errors));
                }
            })

    }

    const clearForm = () => {
        setName("")
        setImage("")
        setDescription("")
        setSeedIndoorDate("")
        setTransplantDate("")
        setSeedOutdoorDate("")
        setClassification("")
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Add Plant</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="image">Image URL</Label>
                        <Input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="description">Description</Label>
                        <Input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="seedIndoorDate">Date for Indoor Seeding</Label>
                        <Input
                            type="date"
                            id="seedIndoorDate"
                            value={seedIndoorDate}
                            onChange={(e) => setSeedIndoorDate(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="transplantDate">Date to Transplant Seedling</Label>
                        <Input
                            type="date"
                            id="transplantDate"
                            value={transplantDate}
                            onChange={(e) => setTransplantDate(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="seedOutdoorDate">Date for Outdoor Seeding</Label>
                        <Input
                            type="date"
                            id="seedOutdoorDate"
                            value={seedOutdoorDate}
                            onChange={(e) => setSeedOutdoorDate(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="classification">Classification</Label>
                        <select name="classification" id="classification" onChange={(e) => setClassification(e.target.value)}>
                            {classifications.map(c => <option value={c.id}>{c.description}</option>)}
                        </select>
                    </FormField>
                    <FormField>
                        <Button type="submit">
                            Submit Plant
                        </Button>
                    </FormField>
                    <FormField>
                        {errors}
                        {errors.map((err) => (
                                <Error key={err}>{err}</Error>
                            ))
                        }
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

export default AddPlant;