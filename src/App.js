import { useContext, useEffect } from "react";
import { MyContext } from "./context";

import "./app.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowAddNote from "./components/ShowAddNote";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";
import ConfirmDelete from "./components/ConfirmDelete";

const App = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.updateData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="box">
        <div className="mini_box">
          {context.state.header && <Header />}
          {context.state.search && <Search />}
          {context.state.addNoteBtn && <ShowAddNote />}
          {context.state.addNote && <AddNote />}
          {context.state.noteList && <NoteList />}
          {context.state.noteDetail && <NoteDetail />}
        </div>
        {context.state.confirmDelete && <ConfirmDelete />}
      </div>
    </div>
  );
};

export default App;
