import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    header: true,
    search: true,
    addNoteBtn: true,
    addNote: false,
    noteList: true,
    noteDetail: false,
    noteView: true,
    noteEdit: false,
    save: false,
    edit: true,
    cancle: false,

    confirmDelete: false,
    toDelete: "",
    notes: [],
    id: 1,
    current: 0,
    currentIndex: 0,
    notice: "blah blah",
    editTemp: ["", ""],
    searchInput: "",
  };

  updateData = () => {
    const note = JSON.parse(localStorage.getItem("notes") || "[]");
    let i = 0;
    const biggest = note.reduce((p, c) => {
      if (p > c) {
        return p;
      } else {
        return c;
      }
    }, i);
    this.setState({ id: biggest.id + 1 || 1 });
    this.setState({ notes: note });
  };

  getIndex = () => {
    this.state.notes.forEach(({ title, note, id }, i) => {
      if (id === this.state.current) this.setState({ currentIndex: i });
    });
  };

  showNotice = (text) => {
    this.setState({ notice: text });
  };

  showAddNote = () => {
    this.setState({ addNote: true, addNoteBtn: false, notice: "" });
  };

  showAddNoteBtn = () => {
    this.setState({ addNote: false, addNoteBtn: true });
  };

  showNoteDetail = (id) => {
    this.setState({
      search: false,
      addNoteBtn: false,
      addNote: false,
      noteList: false,
      noteDetail: true,
      current: id,
    });
    this.getIndex();
  };

  addNote = (title = "", note = "") => {
    if (note.length <= 0) {
      this.setState({ notice: "note field cannot be empty!" });
      return;
    }

    localStorage.setItem(
      "notes",
      JSON.stringify([...this.state.notes, { title, note, id: this.state.id }])
    );
    this.updateData();
    this.state.id++;
    this.showAddNoteBtn();
  };

  deleteNote = (key) => {
    this.blur(true);
    this.setState({ confirmDelete: true, toDelete: key });
  };

  editNote = (title, note) => {
    this.setState({
      noteView: false,
      noteEdit: true,
      save: true,
      edit: false,
      cancle: true,
      editTemp: [title, note],
    });
  };

  stopEdit = () => {
    this.setState({
      noteView: true,
      noteEdit: false,
      save: false,
      edit: true,
      cancle: false,
    });
  };

  cancleEdit = () => {
    this.stopEdit();
  };

  closeDetail = () => {
    this.stopEdit();
    this.setState({
      search: true,
      addNoteBtn: true,
      addNote: false,
      noteList: true,
      noteDetail: false,
    });
  };

  editNoteDetail = (title, text) => {
    this.setState({ editTemp: [title, text] });
  };

  saveEdit = () => {
    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...this.state.notes.slice(0, this.state.currentIndex),
        {
          title: this.state.editTemp[0],
          note: this.state.editTemp[1],
          id: this.state.current,
        },
        ...this.state.notes.slice(
          this.state.currentIndex + 1,
          this.state.notes.length
        ),
      ])
    );
    this.updateData();

    this.setState({ editTemp: [] });
    this.stopEdit();
  };

  blur = (show) => {
    show
      ? document.querySelector(".mini_box").classList.add("unclick")
      : document.querySelector(".mini_box").classList.remove("unclick");
  };

  confirmDelete = () => {
    const newArr = this.state.notes.filter(
      ({ title, note, id }) => id !== this.state.toDelete
    );
    localStorage.setItem("notes", JSON.stringify([...newArr]));

    this.setState({
      confirmDelete: false,
    });
    this.updateData();
    this.blur(false);
  };

  confirmCancle = () => {
    this.setState({
      confirmDelete: false,
    });
    this.blur(false);
  };

  search = (text) => {
    this.setState({ searchInput: text });
  };

  clearSearch = () => {
    console.log(this.state.notes);
    this.setState({ searchInput: "" });
    document.querySelector("#search").value = "";
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            showAddNote: this.showAddNote,
            showAddNoteBtn: this.showAddNoteBtn,
            showNoteDetail: this.showNoteDetail,
            addNote: this.addNote,
            deleteNote: this.deleteNote,
            editNote: this.editNote,
            cancleEdit: this.cancleEdit,
            saveEdit: this.saveEdit,
            closeDetail: this.closeDetail,
            getIndex: this.getIndex,
            editNoteDetail: this.editNoteDetail,
            // deleteNoteDetail: this.deleteNoteDetail,
            confirmDelete: this.confirmDelete,
            confirmCancle: this.confirmCancle,
            search: this.search,
            clearSearch: this.clearSearch,
            updateData: this.updateData,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyContext, MyProvider };
