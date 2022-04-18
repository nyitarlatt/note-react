import { useContext } from "react";
import { MyContext } from "../context";
// import "animate.css";

const AddNote = () => {
  const context = useContext(MyContext);
  const add = () => {
    const title = document.querySelector(".input_addnotetitle").value;
    const note = document.querySelector(".input_addnote").value;
    context.addNote(title, note);
  };
  return (
    <div className="addnote animate__zoomIn">
      <div className="addnote_inputcontainer">
        <input
          className="input_addnotetitle"
          placeholder="title"
          maxLength={60}
          type="text"
        />
      </div>
      <div className="addnote_inputcontainer">
        <textarea
          className="input_addnote"
          placeholder="note..."
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="addnote_btncontainer">
        <div className="notice">{context.state.notice}</div>
        <button className="btn btn_addnote" onClick={add}>
          Add Note
        </button>
        <button
          className="btn btn_cancleaddnote"
          onClick={context.showAddNoteBtn}
        >
          Cancle
        </button>
      </div>
    </div>
  );
};
export default AddNote;
