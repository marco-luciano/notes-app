import { useState, useCallback } from "react";
import { Grid, Stack } from "@chakra-ui/react";
import Note from "../Note/Note";
import "./NoteList.css";
const NoteList = ({ list }) => {
    return (
        <Grid className="NoteList" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
            {list.map((item, index) => (
                <Note key={index} text={item} />
            ))}
        </Grid>
    );
};

export default NoteList;
