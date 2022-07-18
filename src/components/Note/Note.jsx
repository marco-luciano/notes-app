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

function Note({
    id,
    title,
    datetime,
    text,
    handleDelete,
    handleClick,
    backgroundColor = "#83eaf1",
}) {
    // we don't want to add note if the note has only line breaks
    const validateLineBreaks = text.note.replace(/(?:\r\n|\r|\n)/g, "");

    if (!text.note || validateLineBreaks.length === 0) {
        return null;
    }

    let noteTitle = title.slice(0, TITLE_LIMIT);
    noteTitle = !title.length ? "" : noteTitle;
    const message = text.note
        ? text.note.slice(0, CHARACTER_LIMIT)
        : "Example note";
    const datetimeUpdate = format(new Date(), "MMM do hh:mm a"); //e.g. Apr 1st, 9:00 AM
    const confirmation = () =>
        window.confirm(MESSAGE_NOTE_DELETE_CONFIRMATION) && handleDelete(id);

    return (
        <>
            <Grid
                templateAreas={`"header"
                    "main"
                    "footer"`}
                backgroundColor={backgroundColor}
                width="calc(9vw + 100px)"
                height="20rem"
                gridTemplateRows={"50px 1fr 1.5rem"}
                padding={4}
                marginBottom={6}
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
                            id: id,
                            title: noteTitle,
                            note: message,
                            datetime: datetime,
                            datetimeUpdate: datetimeUpdate,
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
