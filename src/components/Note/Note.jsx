import { Box, Box as Grid, GridItem } from "@chakra-ui/react";
import "./Note.css";

const CHARACTER_LIMIT = 200;

function Note({ text }) {
    const message = text ? text.slice(0, CHARACTER_LIMIT) : "Example note";

    const datetime = new Date().toLocaleString();

    return (
        <Grid
            templateAreas={`"header header"
        "nav main"
        "nav footer"`}
            backgroundColor="#ffdd00"
            width="15vw"
            height="20rem"
            gridTemplateRows={"50px 1fr 2rem"}
            padding={2}
        >
            <GridItem area={"header"} h="4rem"></GridItem>
            <GridItem area={"main"} h="14rem">
                {message}
            </GridItem>
            <GridItem area={"footer"} h="2rem">
                {datetime}
            </GridItem>
        </Grid>
    );
}

export default Note;
