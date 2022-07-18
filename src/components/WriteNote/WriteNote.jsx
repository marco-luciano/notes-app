import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import format from "date-fns/format";
import { AddIcon } from "@chakra-ui/icons";
import "./WriteNote.css";
import TextAreaAuto from "../TextAreaAuto/TextAreaAuto";

function WriteNote({ onAddNote }) {
    const [text, setText] = useState({ id: "", title: "", note: "" });

    const handleTitle = (title) => {
        setText((pre) => ({
            ...pre,
            title,
            datetime: format(new Date(), "MMM do hh:mm a"),
            datetimeUpdate: format(new Date(), "MMM do hh:mm a"),
        }));
    };

    const handleNote = (note) => {
        setText((pre) => ({ ...pre, note }));
    };

    const handleKeyDown = (e, maxHeight = Infinity) => {
        e.target.style.height = "inherit";

        const computed = window.getComputedStyle(e.target);

        const CHOP_SIZE = 14;

        const height =
            parseInt(computed.getPropertyValue("border-top-width"), CHOP_SIZE) +
            parseInt(computed.getPropertyValue("padding-top"), CHOP_SIZE) +
            e.target.scrollHeight +
            parseInt(computed.getPropertyValue("padding-bottom"), CHOP_SIZE) +
            parseInt(
                computed.getPropertyValue("border-bottom-width"),
                CHOP_SIZE
            );

        const minHeight = Math.min(height, maxHeight);
        e.target.style.height = `${minHeight}px`;
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
                    onKeyDown={(e) => handleKeyDown(e, 110)}
                    onChange={(e) => handleTitle(e.target.value)}
                    onBlur={(e) => handleTitle(e.target.value)}
                />
            </Box>
            <TextAreaAuto
                placeholder="Create a note..."
                style={style}
                size="lg"
                value={text.note}
                onKeyDown={(e) => handleKeyDown(e, 180)}
                onChange={(e) => handleNote(e.target.value)}
                onBlur={() => {
                    if (text.note !== "") {
                        onAddNote(text);
                        setText({
                            id: null,
                            title: "",
                            note: "",
                            datetime: format(new Date(), "MMM do hh:mm a"),
                            datetimeUpdate: format(
                                new Date(),
                                "MMM do hh:mm a"
                            ),
                        });
                    }
                }}
            />
            <Button
                className="btnAddNote"
                color="#63a4ff"
                bg="black"
                size="lg"
                onClick={() => {
                    if (text.note !== "") {
                        onAddNote(text);
                        setText({
                            id: null,
                            title: "",
                            note: "",
                            datetimeUpdate: format(
                                new Date(),
                                "MMM do hh:mm a"
                            ),
                        });
                    }
                }}
            >
                <AddIcon className="btnAddNoteIcon" w={8} h={8} />
            </Button>
        </Flex>
    );
}
export default WriteNote;
