import { Grid } from "@chakra-ui/react";
import Note from "../Note/Note";
import "./NoteList.css";

const NoteList = ({ list, handleDelete, noteHandleClick }) => {
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
                />
            ))}
        </Grid>
    );
};

export default NoteList;
