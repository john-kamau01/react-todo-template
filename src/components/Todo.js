import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeBackdrop(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeBackdrop} onConfirm={closeBackdrop} /> }
      { modalIsOpen && <Backdrop onClick={closeBackdrop} /> }
    </div>
  );
};

export default Todo;
