import React, { useState } from "react";
import style from "./AddComponent.module.css";

const AddComponent = (props) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <input
        className={style.inputField}
        placeholder="Add item"
        type="text"
        value={item}
        onChange={handleChange}
      ></input>
      <button
        className={style.addButton}
        onClick={() => {
          props.handleSubmit(item);
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddComponent;
