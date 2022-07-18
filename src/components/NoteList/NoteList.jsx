import { Grid } from "@chakra-ui/react";
import Note from "../Note/Note";
import "./NoteList.css";

const NoteList = ({ list, handleDelete, noteHandleClick }) => {
    return (
        <Grid className="NoteList" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
            {list.map((item, index) => (
                <Note
                    id={index}
                    title={item.title}
                    text={item}
                    handleDelete={handleDelete}
                    handleClick={noteHandleClick}
                />
            ))}
        </Grid>
    );
};

export default NoteList;
