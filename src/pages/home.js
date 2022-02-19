import React from "react";
import Map from '../modules/map';
import { Container } from "@mui/material";


const Home = () => {
    return (
        <Container disableGutters maxWidth="100vw">
            <Map />
        </Container>
    )
}

export default Home;