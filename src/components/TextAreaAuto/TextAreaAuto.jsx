import React, { useEffect, useRef, useState } from "react";

import { Textarea } from "@chakra-ui/react";

const TextAreaAuto = (props) => {
    const textareaRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);

    return <Textarea {...props} ref={textareaRef} focusBorderColor="black" />;
};

export default TextAreaAuto;
