import { useState } from "react";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import Modal from "react-modal";
import WriteNote from "./components/WriteNote/WriteNote";
import NoteList from "./components/NoteList/NoteList";
import { nanoid } from "nanoid";
import "./App.css";
import { format } from "date-fns";
import TextAreaAuto from "./components/TextAreaAuto/TextAreaAuto";

const customStyles = {
    content: {
        width: "30rem",
        height: "25rem",
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
        setList((pre) => [...pre, { ...note, id: nanoid() }]);
    };

    const deleteNote = (id) => {
        const newList = list.filter((item) => item["id"] !== id);
        setList(newList);
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const secondaryColor = "rgb(35,35,35)"

    const [noteData, setNoteData] = useState({
        id: "",
        title: "",
        note: "",
        datetime: new Date(),
        datetimeUpdate: new Date(),
    });

    const textAreaStyles = {
        borderRadius: "0px",
        border: "2px solid black",
        resize: "none",
        textAlign: "justify",
    };

    const handleOnChange = (e) =>
        setNoteData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
            datetimeUpdate: format(new Date(), "MMM do hh:mm a"),
        }));

    const handleOnBlur = (e) =>
        setList((pre) =>
            pre.map((note) => (note.id === noteData.id ? noteData : note))
        );

    const noteHandleClick = (props) => {
        setNoteData(props);
        openModal();
    };

    return (
        <div className="App">
            <Grid
                className="MainGrid"
                templateRows="450px 1fr"
                templateColumns="1fr"
                gap={6}
                bg={secondaryColor}
            >
                <Box
                    backgroundColor="#63a4ff"
                    backgroundImage="linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);"
                >
                    <Flex direction="row" justify="center" align="center">
                        <WriteNote onAddNote={addNote} />
                    </Flex>
                </Box>

                <Box bg={secondaryColor}>
                    <NoteList
                        list={list}
                        handleDelete={deleteNote}
                        noteHandleClick={noteHandleClick}
                    />
                </Box>
            </Grid>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={noteData.title}
            >
                <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                >
                    <Flex flexDirection="column" gap={4}>
                        <TextAreaAuto
                            value={noteData.title}
                            name="title"
                            style={textAreaStyles}
                            onBlur={handleOnBlur}
                            onChange={handleOnChange}
                            maxHeight="80px"
                            fontFamily="'Roboto', sans-serif"
                            fontWeight="800"
                            fontSize="2xl"
                        />

                        <TextAreaAuto
                            value={noteData.note}
                            name="note"
                            style={textAreaStyles}
                            onBlur={handleOnBlur}
                            onChange={handleOnChange}
                            maxHeight="100px"
                        />
                    </Flex>
                    <Flex
                        direction="row"
                        justify="space-between"
                        align="center"
                    >
                        <Text>Last edit: {noteData.datetimeUpdate}</Text>
                        <Button
                            marginLeft="auto"
                            marginRight="0"
                            size="sm"
                            bg="rgb(35,35,35)"
                            color="white"
                            onClick={closeModal}
                            _hover={{ bg: "white", color: "rgb(35,35,35)" }}
                        >
                            Close
                        </Button>
                    </Flex>
                </Flex>
            </Modal>
        </div>
    );
}

export default App;
