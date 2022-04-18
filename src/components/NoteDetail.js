import { useContext, useEffect, useRef } from "react";
import { MyContext } from "../context";
const NoteDetail = () => {
  const context = useContext(MyContext);
  const titleInput = useRef();
  const noteInput = useRef();

  useEffect(() => {
    context.getIndex();
  }, []);

  return (
    <div className="notedetail animate__zoomIn">
      <div className="detailbtn_container">
        <div>
          {context.state.save && (
            <button className="btn btn_save" onClick={context.saveEdit}>
              Save
            </button>
          )}

          {/* edit btn  */}
          {context.state.edit && (
            <button
              className="btn btn_edit"
              onClick={() =>
                context.editNote(
                  context.state.notes[context.state.currentIndex].title,
                  context.state.notes[context.state.currentIndex].note
                )
              }
            >
              Edit
            </button>
          )}
          {/* cancle edit btn  */}
          {context.state.cancle && (
            <button className="btn btn_cancleedit" onClick={context.cancleEdit}>
              Cancle
            </button>
          )}
          <button className="btn btn_closedetail" onClick={context.closeDetail}>
            Close
          </button>
        </div>{" "}
      </div>
      {/* view  */}
      {context.state.noteView && (
        <div className="noteviewtitle">
          {context.state.notes[context.state.currentIndex].title}
        </div> //here
      )}

      {context.state.noteView && (
        <div className="noteview">
          {context.state.notes[context.state.currentIndex].note}
        </div>
      )}

      {/* edit  */}
      {context.state.noteEdit && (
        <input
          ref={titleInput}
          placeholder={"title"}
          className="noteedittitle"
          type="text"
          maxLength={60}
          value={context.state.editTemp[0]}
          onChange={() =>
            context.editNoteDetail(
              titleInput.current.value,
              noteInput.current.value
            )
          }
        />
      )}
      {context.state.noteEdit && (
        <textarea
          ref={noteInput}
          className="noteedit"
          value={context.state.editTemp[1]}
          onChange={() =>
            context.editNoteDetail(
              titleInput.current.value,
              noteInput.current.value
            )
          }
        ></textarea>
      )}
    </div>
  );
};

export default NoteDetail;
