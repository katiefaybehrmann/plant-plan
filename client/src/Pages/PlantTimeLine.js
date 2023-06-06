import { useContext } from "react";
import React from "react";
import styled from "styled-components";
import { UserContext } from "../Components/Context";
import { Box } from "../styles";


function PlantTimeLine() {
    const { user } = useContext(UserContext);
    const dayArr = [];
    const dateArr= ["2024-02-08", "2024-02-20", "2024-02-22", 
    "2024-03-07", "2024-03-08", "2024-03-20", "2024-03-21", "2024-03-22", "2024-03-23", "2024-03-24",
    "2024-04-05", "2024-04-06", "2024-04-13", "2024-04-19","2024-04-20",
    "2024-05-04","2024-05-05","2024-05-06","2024-05-18", "2024-05-19", "2024-05-20","2024-05-25",
    "2024-06-04"]

    dateArr.map((d) => {
        const plantObjs = []

        user.plants.forEach((p) => {
            if (p.seed_indoor == d) {
                plantObjs.push(" " + p.name + ": Seed Indoors")
            }
            else if (p.seedling_transplant == d) {
                plantObjs.push(" " + p.name + ": Transplant Outside")
            }
            else if (p.seed_outdoor == d) {
                plantObjs.push(" " + p.name + ": Seed Outdoors")
            }
        })
        if (plantObjs.length > 0) {
            dayArr.push(d + ":" + plantObjs)
        }
        return dayArr;
    }
    )

    return (
        <Wrapper>
            {dayArr.map((d) =>
                <Timeline key={d.id}>
                    <Box>
                        <h1>{d}</h1>
                    </Box>
                </Timeline>)}
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