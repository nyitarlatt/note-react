import { useRef, useState, useContext } from "react";
import { MyContext } from "../context";
import { toast } from "react-toastify";

const Initial = () => {
  const context = useContext(MyContext);
  const textInput = useRef();
  const [showNext, setShowNext] = useState(false);
  // const [showError, setShowError] = useState(false);
  const handleChange = () => {
    if (textInput.current.value.length >= 5) setShowNext(true);
    else setShowNext(false);
  };

  const handleSubmit = () => {
    const value = textInput.current.value;
    if (value.length >= 30) {
      // setShowError(true);
      toast.error("nage yo!", {
        position: toast.POSITION.TOP_LEFT,
      });
      return false;
    }
    context.goTo(1);
    context.question(value);
  };

  return (
    <div>
      <h1>Ask questions</h1>
      <input
        ref={textInput}
        onChange={handleChange}
        className="form-control"
        name="question"
        type="text"
      />
      {showNext && (
        <button
          onClick={handleSubmit}
          className="btn animate__animated animate__fadeIn"
        >
          Next
        </button>
      )}
      {/* {showError && <div className="error">the question is too long</div>} */}
    </div>
  );
};

export default Initial;
