import { Box, CloseButton, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import { format } from "date-fns";
import "./Note.css";

const CHARACTER_LIMIT = 200;

function Note({ id, text, handleDelete }) {
    const message = text ? text.slice(0, CHARACTER_LIMIT) : "Example note";
    const datetime = format(new Date(), "MMM qo hh:mm a"); //e.g. Apr 1st, 9:00 AM
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const confirmation = () => {
        if (window.confirm("Are you sure you want to delete your note?")) {
            handleDelete(id);
        }
    }
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
            gap={4}
        >
            <GridItem area={"header"}>
                <Box >
                    <CloseButton marginLeft="auto" marginRight="0" size="md" onClick={() => {confirmation()}}/>
                </Box>
                <Box><Heading as='h3' size='md'>Title</Heading></Box>
            </GridItem>
            <GridItem area={"main"}>
                {message}
            </GridItem>
            <GridItem area={"footer"} textAlign="right">
                {datetime}
            </GridItem>
        </Grid>
    );
}

export default Note;
