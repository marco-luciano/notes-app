import { useState } from "react";
import Modal from "react-modal";
import {
    Box,
    CloseButton,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import "./Note.css";

const CHARACTER_LIMIT = 200;
const TITLE_LIMIT = 50;
const MESSAGE_NOTE_DELETE_CONFIRMATION =
    "Are you sure you want to delete your note?";

Modal.setAppElement("#root");

function Note({ id, title, text, handleDelete, handleClick, backgroundColor = "#83eaf1" }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    if (!text.note) {
        return null;
    }

    let noteTitle = title.slice(0, TITLE_LIMIT);
    noteTitle = !title.length ? "" : noteTitle;
    const message = text.note
        ? text.note.slice(0, CHARACTER_LIMIT)
        : "Example note";
    const datetime = format(new Date(), "MMM do hh:mm a"); //e.g. Apr 1st, 9:00 AM

    const confirmation = () => {
        if (window.confirm(MESSAGE_NOTE_DELETE_CONFIRMATION)) {
            handleDelete(id);
        }
    };
    return (
        <>
            <Grid
                templateAreas={`"header"
                    "main"
                    "footer"`}
                backgroundColor={backgroundColor}
                width="15vw"
                height="20rem"
                gridTemplateRows={"50px 1fr 2rem"}
                padding={4}
                gap={4}
            >
                <GridItem area={"header"}>
                    <Box>
                        <CloseButton
                            marginLeft="auto"
                            marginRight="0"
                            size="md"
                            onClick={() => {
                                confirmation();
                            }}
                        />
                    </Box>
                    <Box>
                        <Heading as="h3" size="md">
                            {noteTitle}
                        </Heading>
                    </Box>
                </GridItem>
                <GridItem
                    area={"main"}
                    textAlign="left"
                    overflowX="auto"
                    onClick={() =>
                        handleClick({
                            noteTitle: noteTitle,
                            message: message,
                            datetime: datetime,
                        })
                    }
                >
                    <Text fontSize="20px">{message}</Text>
                </GridItem>
                <GridItem area={"footer"} textAlign="right">
                    {datetime}
                </GridItem>
            </Grid>
        </>
    );
}

export default Note;
