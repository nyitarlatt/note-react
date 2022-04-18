import { BsTrashFill } from "react-icons/bs";

const Note = ({ title, onDelete, id, onView, note }) => {
  return (
    <div className="note_container">
      <div className="note">{title || note.slice(0, 50)}</div>
      <button className="btn btn_view" onClick={() => onView(id)}>
        View
      </button>
      <button className="btn btn_delete" onClick={() => onDelete(id)}>
        <BsTrashFill />
      </button>
    </div>
  );
};

export default Note;
