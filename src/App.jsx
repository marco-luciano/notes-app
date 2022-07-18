import { useState } from "react";
import { CloseButton, Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Modal from "react-modal";
import WriteNote from "./components/WriteNote/WriteNote";
import NoteList from "./components/NoteList/NoteList";

import "./App.css";

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
        backgroundColor: "#83eaf1",
        justifyContent: "space-between",
    },
};

function App() {
    const [list, setList] = useState([]);
    const addNote = (note) => {
        setList((pre) => [...pre, note]);
    };

    const deleteNote = (id) => {
        const newList = list.filter((item, index) => index !== id);
        setList(newList);
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [noteData, setNoteData] = useState({noteTitle: "", noteText: "", datetime: new Date()});

    const noteHandleClick = (props) => {
        console.log(props.noteTitle, props.message, props.datetime);
        setNoteData(props);
        openModal();
    }

    return (
        <div className="App">
            <Grid
                className="MainGrid"
                templateRows="400px 1fr"
                templateColumns="1fr"
                gap={6}
                bg="rgb(35,35,35)"
            >
                <Box
                    backgroundColor="#63a4ff"
                    backgroundImage="linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);"
                >
                    <Flex direction="row" justify="center" align="center">
                        <WriteNote onAddNote={addNote} />
                    </Flex>
                </Box>

                <Box bg="rgb(35,35,35)">
                    <NoteList list={list} handleDelete={deleteNote} noteHandleClick={noteHandleClick} />
                </Box>
            </Grid>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={noteData.noteTitle}
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
                                {noteData.noteTitle}
                            </Heading>
                            <CloseButton
                                marginLeft="auto"
                                marginRight="0"
                                size="lg"
                                color="black"
                                onClick={closeModal}
                            />
                        </Flex>
                        <Text textAlign="justify">{noteData.message}</Text>
                    </Flex>
                    <Text>Created on {noteData.datetime}</Text>
                </Flex>
            </Modal>
        </div>

    );
}

export default App;
