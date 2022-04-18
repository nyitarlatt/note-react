import { useContext } from "react";
import { MyContext } from "../context";
const ShowAddNote = () => {
  const context = useContext(MyContext);
  return (
    <div className="showaddnote_container ">
      <button onClick={context.showAddNote} className="btn_showaddnote btn">
        Add New Note
      </button>
    </div>
  );
};

export default ShowAddNote;
