import { useContext } from "react";
import { MyContext } from "../context";
import Note from "./Note";

const NoteList = () => {
  const context = useContext(MyContext);
  const noteArr = context.state.notes;
  const findNote = (title, note) => {
    return title.includes(context.state.searchInput)
      ? true
      : note.includes(context.state.searchInput)
      ? true
      : false;
  };

  return (
    <div className="notelist">
      {noteArr.map(
        ({ title, note, id }) =>
          findNote(title, note) && (
            <Note
              title={title}
              id={id}
              key={id}
              note={note}
              onDelete={context.deleteNote}
              onView={context.showNoteDetail}
            />
          )
      )}
    </div>
  );
};

export default NoteList;
