import React, { useState, useCallback } from "react";
import {
    Button,
    Input,
    InputGroup,
    InputRightAddon,
    Text,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import "./WriteNote.css";

function WriteNote({ onAddNote }) {
    const [text, setText] = useState("");

    return (
        <div className="WriteNote">
            <Input
                placeholder="Write a note..."
                size="lg"
                bg="white"
                textColor="black"
                focusBorderColor="black"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button
                color="yellow"
                bg="black"
                size="lg"
                onClick={() => onAddNote(text)}
            >
                {" "}
                <AddIcon w={6} h={6} />{" "}
            </Button>
        </div>
    );
}
export default WriteNote;
