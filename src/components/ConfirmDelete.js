import { useContext } from "react";
import { MyContext } from "../context";
const ConfirmDelete = () => {
  const context = useContext(MyContext);
  return (
    <div className="confirm_container animate__zoomIn">
      <div className="confirmtext">Are you sure you want to delete this?</div>
      <div className="btnconfirm">
        <button className="btn confirm_delete" onClick={context.confirmDelete}>
          Delete
        </button>
        <button className="btn confirm_cancle" onClick={context.confirmCancle}>
          Cancle
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
