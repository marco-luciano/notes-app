import React, { useState } from "react";
import { Button, Flex, Input, Textarea } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import "./WriteNote.css";

function WriteNote({ onAddNote }) {
    const [text, setText] = useState({ title: "", note: "" });
    const handleTitle = (title) => {
        let newText = { ...text };
        newText.title = title;
        setText(newText);
        title = "";
    };

    const handleNote = (newTextNote) => {
        let newText = { ...text };
        newText.note = newTextNote;
        setText(newText);
    };

    return (
        <Flex className="WriteNote" flexDirection="column" gap={8}>
            <Textarea
                placeholder="Title"
                size="lg"
                bg="white"
                textColor="black"
                focusBorderColor="black"
                value={text.title}
                onChange={(e) => handleTitle(e.target.value)}
            />
            <Textarea
                placeholder="Write a note..."
                size="lg"
                bg="white"
                textColor="black"
                focusBorderColor="black"
                height="10rem"
                value={text.note}
                onChange={(e) => {
                    handleNote(e.target.value);
                }}
            />
            <Button
                className="btnAddNote"
                color="#63a4ff"
                bg="black"
                size="lg"
                onClick={() => {
                    onAddNote(text);
                    setText({ title: "", note: "" });
                }}
            >
                <AddIcon className="btnAddNoteIcon" w={8} h={8} />
            </Button>
        </Flex>
    );
}
export default WriteNote;
