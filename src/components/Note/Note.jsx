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

const customStyles = {
    content: {
        width: "30rem",
        height: "20rem",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ffdd00",
        justifyContent: "space-between",
    },
};

const CHARACTER_LIMIT = 200;
const TITLE_LIMIT = 50;
const MESSAGE_NOTE_DELETE_CONFIRMATION =
    "Are you sure you want to delete your note?";

Modal.setAppElement("#root");

function Note({ id, title, text, handleDelete, handleClick }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    let noteTitle = title.slice(0, TITLE_LIMIT);
    noteTitle = !title.length ? "Note title" : noteTitle;
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
                    onClick={openModal}
                >
                    {message}
                </GridItem>
                <GridItem area={"footer"} textAlign="right">
                    {datetime}
                </GridItem>
            </Grid>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={noteTitle}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                >
                    <Flex flexDirection="column" gap={4}>
                        <Flex
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Heading as="h3" size="lg">
                                {noteTitle}
                            </Heading>
                            <CloseButton
                                marginLeft="auto"
                                marginRight="0"
                                size="lg"
                                color="black"
                                onClick={closeModal}
                            />
                        </Flex>
                        <Text textAlign="justify">{message}</Text>
                    </Flex>
                    <Text>Created on {datetime}</Text>
                </Flex>
            </Modal>
        </>
    );
}

export default Note;
