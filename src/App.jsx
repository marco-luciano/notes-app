import { useState } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem,
    Input,
    Square,
    Text,
} from "@chakra-ui/react";
import WriteNote from "./components/WriteNote/WriteNote";
import NoteList from "./components/NoteList/NoteList";
import "./App.css";

function App() {
    const [list, setList] = useState([]);
    const addNote = (note) => {
        setList((pre) => [...pre, note]);
    };
    return (
        <div className="App">
            <Grid
                className="MainGrid"
                templateRows="100px 1fr"
                templateColumns="1fr"
                gap={6}
                bg="rgb(35,35,35)"
            >
                <Box
                    bg="#fbb034"
                    backgroundImage="linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);"
                >
                    <Flex direction="row" justify="center" align="center">
                        <WriteNote onAddNote={addNote} />
                    </Flex>
                </Box>

                <Box bg="rgb(35,35,35)">
                    <NoteList list={list} />
                </Box>
            </Grid>
        </div>
    );
}

export default App;
