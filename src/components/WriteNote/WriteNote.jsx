import React, { useState } from "react";
import { Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import "./WriteNote.css";
import TextAreaAuto from "../TextAreaAuto/TextAreaAuto";

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

    const handleKeyDown = (e) => {
        e.target.style.height = "inherit";

        const computed = window.getComputedStyle(e.target);

        const height =
            parseInt(computed.getPropertyValue("border-top-width"), 10) +
            parseInt(computed.getPropertyValue("padding-top"), 10) +
            e.target.scrollHeight +
            parseInt(computed.getPropertyValue("padding-bottom"), 10) +
            parseInt(computed.getPropertyValue("border-bottom-width"), 10);

        e.target.style.height = `${height}px`;
    };

    const style = {
        backgroundColor: "white",
        borderRadius: "0px",
        resize: "none",
    };

    return (
        <Flex className="WriteNote" flexDirection="column" gap={8}>
            <Box className="WriteNoteBox">
                <TextAreaAuto
                    placeholder="Title"
                    value={text.title}
                    style={style}
                    size="lg"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => handleTitle(e.target.value)}
                    onBlur={(e) => handleTitle(e.target.value)}
                />
            </Box>
            <TextAreaAuto
                placeholder="Create a note..."
                style={style}
                size="lg"
                value={text.note}
                onKeyDown={handleKeyDown}
                onChange={(e) => handleNote(e.target.value)}
                onBlur={() => {
                    onAddNote(text);
                    setText({ title: "", note: "" });
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
