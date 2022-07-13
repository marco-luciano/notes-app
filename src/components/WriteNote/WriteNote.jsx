import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import "./WriteNote.css";

function WriteNote({ onAddNote }) {
    const [text, setText] = useState({ title: "", note: "" });
    const handleTitle = (title) => {
        let newText = { ...text };
        newText.title = title;
        setText(newText);
    };

    const handleNote = (newTextNote) => {
        let newText = { ...text };
        newText.note = newTextNote;
        setText(newText);
    };

    return (
        <Flex className="WriteNote">
            <Input
                placeholder="Title"
                size="lg"
                bg="white"
                textColor="black"
                focusBorderColor="black"
                value={text.title}
                width="40%"
                onChange={(e) => handleTitle(e.target.value)}
            />
            <Input
                placeholder="Write a note..."
                size="lg"
                bg="white"
                textColor="black"
                focusBorderColor="black"
                value={text.note}
                onChange={(e) => handleNote(e.target.value)}
            />
            <Button
                className="btnAddNote"
                color="yellow"
                bg="black"
                size="lg"
                onClick={() => onAddNote(text)}
            >
                <AddIcon className="btnAddNoteIcon" w={8} h={8} />
            </Button>
        </Flex>
    );
}
export default WriteNote;
