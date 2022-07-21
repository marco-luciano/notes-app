import React, { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from "@chakra-ui/react";
import Note from "../Note/Note";
import * as localforage from "localforage";
import "./NoteList.css";

const NoteList = ({ list, handleDelete, noteHandleClick }) => {

    const [notesList, setNoteList] = useState([]);

    const getNotes = () => {
        let notes = [];
        localforage.iterate((value, key, index) => {
            notes.push(value);
        }).then(() => {
            setNoteList(notes);
        });
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <Grid
            className="NoteList"
            gridTemplateColumns="repeat(6, 1fr)"
            gap={2}
            rowGap={6}
        >
            {list.map((item, index) => (
                <Note
                    id={item.id}
                    title={item.title}
                    text={item}
                    handleDelete={handleDelete}
                    handleClick={noteHandleClick}
                    datetime={item.datetime}
                    key={item.id}
                />
            ))}
        </Grid>
    );
};

export default NoteList;
